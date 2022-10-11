import ACTIONS from "config/actions";

//slideshow component
if(!!AFRAME.components["slideshow"])
      delete AFRAME.components["slideshow"];
AFRAME.registerComponent('slideshow', {
    //schema of the component
    schema: {
        state: { type: 'string', default: 'still' },
        duration: { type: 'float', default: 2 },
        offset: { type: 'string', default: "2 0 0" },
        forwardTrigger: { type: 'selector' },
        backwardTrigger: { type: 'selector' },
        toShow: { type: 'float', default: 1 }

    },
    //using events ensures that event handlers properly clean themselves up when the entity or scene is paused, or the component is detached.
    events: {
        //activates when slideForward event is emitted on this
        slideForward: function (evt) {
            this.startSlidingForward();
        },
        //activates when slideBackward event is emitted on this
        slideBackward: function (evt) {
            this.startSlidingBackward();
        }
    },
    //initializes the slideshow
    init: function () {
        //creating useful attributes
        var distance = this.data.offset.split(' ').map(Number);
        this.distanceVector = new THREE.Vector3(distance[0], distance[1], distance[2]);
        this.animationStartingTime = null;
        this.slideEl_collection = this.el.children;
        this.slideEl_collection_length = this.slideEl_collection.length;
        this.buildSlides();
    },
    //most of the logic is in the .update() handler so that it can initialize and handle updates all at once without repeating code
    update: function (oldData) {
        var data = this.data;

        //changing state DOES NOT need rebuilding
        //changing duration DOES NOT need rebuilding
        //changing offset DOES rebuilding
        if (oldData.offset && data.offset !== oldData.offset) {
            var distance = this.data.offset.split(' ').map(Number);
            this.distanceVector = new THREE.Vector3(distance[0], distance[1], distance[2]);
            this.buildSlides();
        }
        //changing forwardTriggerId and backwardTriggerId does not need rebuilding but, but listeners are to be managed correctly
        //assigning the value of this to a variable because it will change
        var slideshow = this;
        //removing old listeners if the id changes
        if (oldData.forwardTrigger && data.forwardTrigger !== oldData.forwardTrigger) {
            data.forwardTrigger.removeEventListener("click", slideshow.triggerSlideForward.bind(slideshow));
        }
        if (oldData.backwardTrigger && data.backwardTrigger !== oldData.backwardTrigger) {
            data.backwardTrigger.removeEventListener("click", slideshow.triggerSlideBackward.bind(slideshow));
        }
        //adding event listeners to the triggers
        if (data.forwardTrigger) {
            data.forwardTrigger.addEventListener("click", slideshow.triggerSlideForward.bind(slideshow));
        }
        if (data.backwardTrigger)
            data.backwardTrigger.addEventListener("click", slideshow.triggerSlideBackward.bind(slideshow));
    },
    //handle component removal
    remove: function () {
        var data = this.data;
        var el = this.el;

        // Remove event listeners from forwardTrigger and backwardTrigger
        if (data.forwardTrigger)
            data.forwardTrigger.removeEventListener("click", this.triggerSlideForward);
        if (data.backwardTrigger)
            data.forwardTrigger.removeEventListener("click", this.triggerSlideBackward);
    },
    buildSlides: function () {
        var nextPosition = new THREE.Vector3(0, 0, 0);
        var lastPosition = new THREE.Vector3(0, 0, 0);
        var distanceVector = this.distanceVector;
        var slideEl_collection = this.slideEl_collection;
        var slideEl_collection_length = this.slideEl_collection_length;

        //generating the "slides" according to the distanceVector
        for (var i = 0; i < slideEl_collection_length; i++) {
            var slideEl = slideEl_collection[i];
            slideEl.index = i;
            slideEl.object3D.position.set(nextPosition.x, nextPosition.y, nextPosition.z);
            lastPosition = nextPosition;
            nextPosition.addVectors(lastPosition, distanceVector);
        }
        //update visibility of elements according to index
        this.updateVisibility();
        return;
    },
    triggerSlideForward: function () {
        var data = this.data;
        var el = this.el;

        if (data.state == "still") {
            window.socket.emit(ACTIONS.CHANGE_SLIDE, {action: "forward"});
            this.el.emit("slideForward")
        }
    },
    triggerSlideBackward: function () {
        var data = this.data;
        var el = this.el;

        if (data.state == "still") {
            window.socket.emit(ACTIONS.CHANGE_SLIDE, {action: "backward"});
            this.el.emit("slideBackward")
        }
    },
    startSlidingForward: function () {
        var data = this.data;
        var slideEl_collection = this.slideEl_collection;
        var slideEl_collection_length = this.slideEl_collection_length;
        var distanceVector = this.distanceVector;

        //update index
        for (var i = 0; i < slideEl_collection_length; i++) {
            slideEl_collection[i].index++;
            //the element goes outside the limit
            if (slideEl_collection[i].index == slideEl_collection_length) {
                slideEl_collection[i].setAttribute("visible", "true");
                slideEl_collection[i].index = -1;
                slideEl_collection[i].object3D.position.set(slideEl_collection[i].index * distanceVector.x, slideEl_collection[i].index * distanceVector.y, slideEl_collection[i].index * distanceVector.z);
                slideEl_collection[i].index++;
            }
        }
        //sets the slider state to slidingForward
        data.state = "slidingForward";
    },
    startSlidingBackward: function () {
        var data = this.data;
        var slideEl_collection = this.slideEl_collection;
        var slideEl_collection_length = this.slideEl_collection_length;
        var distanceVector = this.distanceVector;

        for (var i = 0; i < slideEl_collection_length; i++) {
            //the element goes outside the limit
            if (slideEl_collection[i].index == data.toShow) {
                slideEl_collection[i].setAttribute("visible", "true");
            }
        }
        //sets the slider state to slidingBackward
        data.state = "slidingBackward";
    },
    updateAnimationTime: function (lifeTime) {
        //if the animation is starting just now (animationStartingTime == null)
        if (this.animationStartingTime == null) {
            //set animationStartingTime to the lifeTime of the component
            this.animationStartingTime = lifeTime;
        }
        //calculates how much time passed since the animation started
        this.animationTime = lifeTime - this.animationStartingTime;
        return;
    },
    checkAnimationEnd: function () {
        var data = this.data;
        var animationTime = this.animationTime;

        if (animationTime >= data.duration * 1000)
            return 1;
        else
            return 0;
    },
    startAnimationEndRoutine: function () {
        var data = this.data;
        var animationStartingTime = this.animationStartingTime;

        data.state = 'still';
        this.animationStartingTime = null;
        return;
    },
    updateVisibility: function () {
        var data = this.data;
        var slideEl_collection = this.slideEl_collection;
        var slideEl_collection_length = this.slideEl_collection_length;

        for (var i = 0; i < slideEl_collection_length; i++) {
            if (slideEl_collection[i].index < data.toShow) {
                slideEl_collection[i].setAttribute("visible", "true");
            }
            if (slideEl_collection[i].index >= data.toShow) {
                slideEl_collection[i].setAttribute("visible", "false");
            }
        }

    },
    moveForward: function () {
        var slideEl_collection = this.slideEl_collection;
        var slideEl_collection_length = this.slideEl_collection_length;
        var distanceVector = this.distanceVector;

        for (var i = 0; i < slideEl_collection_length; i++) {
            slideEl_collection[i].object3D.position.set(slideEl_collection[i].index * distanceVector.x, slideEl_collection[i].index * distanceVector.y, slideEl_collection[i].index * distanceVector.z);
        }
        //update visibility of elements according to index
        this.updateVisibility()
    },
    moveBackward: function () {
        var slideEl_collection = this.slideEl_collection;
        var slideEl_collection_length = this.slideEl_collection_length;
        var distanceVector = this.distanceVector;

        for (var i = 0; i < slideEl_collection_length; i++) {
            slideEl_collection[i].index--;
            //the element goes outside the limit
            if (slideEl_collection[i].index == -1) {
                slideEl_collection[i].index = slideEl_collection_length - 1;
            }
            slideEl_collection[i].object3D.position.set(slideEl_collection[i].index * distanceVector.x, slideEl_collection[i].index * distanceVector.y, slideEl_collection[i].index * distanceVector.z);
        }
        //update visibility of elements according to index
        this.updateVisibility()
    },
    animateForward: function (deltaX, deltaY, deltaZ) {
        var slideEl_collection = this.slideEl_collection;
        var slideEl_collection_length = this.slideEl_collection_length;
        var slideElCurrentPosition;

        for (var i = 0; i < slideEl_collection_length; i++) {
            // Grab position vectors (THREE.Vector3) from the entities' three.js objects.
            slideElCurrentPosition = slideEl_collection[i].object3D.position;
            // Translate the entity in the direction along the direction.
            slideEl_collection[i].object3D.position.set(slideElCurrentPosition.x + deltaX, slideElCurrentPosition.y + deltaY, slideElCurrentPosition.z + deltaZ);
        }
    },
    animateBackward: function (deltaX, deltaY, deltaZ) {
        var slideEl_collection = this.slideEl_collection;
        var slideEl_collection_length = this.slideEl_collection_length;
        var slideElCurrentPosition;

        for (var i = 0; i < slideEl_collection_length; i++) {
            // Grab position vectors (THREE.Vector3) from the entities' three.js objects.
            slideElCurrentPosition = slideEl_collection[i].object3D.position;
            // Translate the entity in the direction along the opposite of the direction.
            slideEl_collection[i].object3D.position.set(slideElCurrentPosition.x - deltaX, slideElCurrentPosition.y - deltaY, slideElCurrentPosition.z - deltaZ);
        }
    },
    tick: function (time, timeDelta) {
        var slideEl_collection = this.slideEl_collection;
        var slideEl_collection_length = this.slideEl_collection_length;
        var distanceVector = this.distanceVector;

        //timeDelta : dx = this.data.duration : distanceVector.x --> deltax = timedelta * distancevectorx / duration
        var dx = distanceVector.x * (timeDelta / 1000) / this.data.duration;
        var dy = distanceVector.y * (timeDelta / 1000) / this.data.duration;
        var dz = distanceVector.z * (timeDelta / 1000) / this.data.duration;

        if (this.data.state == "slidingForward") {
            //updates the animation time each frame
            this.updateAnimationTime(time);
            //checks i the animation has ended
            if (this.checkAnimationEnd()) {
                //whatever needs to be done at the end of each animation
                this.startAnimationEndRoutine();
                //cycle last element
                this.moveForward();
                return;
            }
            //moves the slider every frame
            this.animateForward(dx, dy, dz);
        } else if (this.data.state == "slidingBackward") {
            //calculates how much time passed since the animation started
            this.updateAnimationTime(time);
            //checks i the animation has ended
            if (this.checkAnimationEnd()) {
                //whatever needs to be dodne at the end of each animation
                this.startAnimationEndRoutine();
                //cycle last element
                this.moveBackward();
                return;
            }
            //moves the slider every frame
            this.animateBackward(dx, dy, dz);
        } else {
            return;
        }
    }
});