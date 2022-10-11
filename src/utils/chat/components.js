import { update_loadingScreen } from './loadingScreen'

//a link cmponent to make aframe elements linkable in another page
if(!!AFRAME.components["simple-link"])
      delete AFRAME.components["simple-link"];
AFRAME.registerComponent('simple-link', {
    schema: {
        href: { default: '' },
        target: { default: '_blank' }
    },
    init: function () {
        this.el.addEventListener('click', (e) => {
            window.open(this.attrValue.href, this.data.target);
        });
    }
});
//sit down component
if(!!AFRAME.components["seat"])
      delete AFRAME.components["seat"];
AFRAME.registerComponent('seat', {
    schema: {
        state: { type: 'string', default: 'standing' },
        camera: { type: 'selector' },
        height: { type: 'number', default: 1 },
        standUpPosition: { type: 'vec3', default: { x: 1, y: 1.65, z: 1 } },
        duration: { type: 'number' }
    },
    //using events ensures that event handlers properly clean themselves up when the entity or scene is paused, or the component is detached.
    events: {
        //activates when sitDown event is emitted on this
        click: function (evt) {
            var data = this.data;
            //sets the slider state to slidingForward
            if (data.state == "standing") {
                this.startSittingDown();
            } else if (data.state == "sitting") {
                this.startStandingUp();
            } else {
                //already sittingDown or standingUp
            }
        }
    },
    init: function () {
        if(this.data.camera) {
            this.simpleNavmeshConstraintBk = this.data.camera.getAttribute("simple-navmesh-constraint");
            this.wasdControlsBk = this.data.camera.getAttribute("wasd-controls");
        }
        this.directionVec3 = new THREE.Vector3();
    },
    startSittingDown: function () {
        var data = this.data;
        //sets the slider state to slidingForward
        data.state = "sittingDown";
    },
    startStandingUp: function () {
        var data = this.data;
        //sets the slider state to slidingForward
        data.state = "standingUp";
    },
    tick: function (time, timeDelta) {
        var data = this.data;
        var directionVec3 = this.directionVec3;
        var currentPosition = new THREE.Vector3();
        if(!!data.camera) {
            data.camera.object3D.getWorldPosition(currentPosition);
        }
        // Grab position vectors (THREE.Vector3) from the entities' three.js objects.
        var targetPosition = new THREE.Vector3();
        this.el.object3D.getWorldPosition(targetPosition);
        // Calculate the distance.
        var distanceVec3 = new THREE.Vector3(targetPosition.x - currentPosition.x, 0, targetPosition.z - currentPosition.z);
        var distance = distanceVec3.length();

        if (data.state == "sittingDown") {
            if(!!data.camera) {
                data.camera.removeAttribute("simple-navmesh-constraint")
                data.camera.setAttribute("wasd-controls", "acceleration: 0")
            }
            if (distance < 0.5) {
                directionVec3 = new THREE.Vector3(targetPosition.x - currentPosition.x, targetPosition.y - currentPosition.y + data.height, targetPosition.z - currentPosition.z);
            } else if (true) {
                // Subtract the vectors to get the direction the entity should head in.
                directionVec3 = new THREE.Vector3(targetPosition.x - currentPosition.x, 0, targetPosition.z - currentPosition.z);
            }
            //timeDelta : dx = this.data.duration : distanceVector.x --> deltax = timedelta * distancevectorx / duration
            var dx = directionVec3.x * (timeDelta / 1000) / data.duration;
            var dy = directionVec3.y * (timeDelta / 1000) / data.duration;
            var dz = directionVec3.z * (timeDelta / 1000) / data.duration;
            // Translate the entity in the direction towards the target.
            if(!!data.camera) {
                data.camera.setAttribute('position', {
                    x: currentPosition.x + dx,
                    y: currentPosition.y + dy,
                    z: currentPosition.z + dz
                });
            }
            if ((currentPosition.y - targetPosition.y <= (data.height + 0.1))) {
                data.state = "sitting";
                return;
            }
            return;
        }
        if (data.state == "standingUp") {
            if (currentPosition.y - targetPosition.y <= data.standUpPosition.y) {
                // Standing up
                directionVec3 = new THREE.Vector3(0, data.standUpPosition.y, 0);
            } else if (true) {
                //moving to the standingUpPosition
                // Subtract the vectors to get the direction the entity should head in.
                directionVec3 = new THREE.Vector3(data.standUpPosition.x, 0, data.standUpPosition.z);;
            }
            //timeDelta : dx = this.data.duration : distanceVector.x --> deltax = timedelta * distancevectorx / duration
            var dx = directionVec3.x * (timeDelta / 1000) / data.duration;
            var dy = directionVec3.y * (timeDelta / 1000) / data.duration;
            var dz = directionVec3.z * (timeDelta / 1000) / data.duration;
            // Translate the entity in the direction towards the target.
            if(!!data.camera) {
                data.camera.setAttribute('position', {
                    x: currentPosition.x + dx,
                    y: currentPosition.y + dy,
                    z: currentPosition.z + dz
                });
            }
            if (distance >= new THREE.Vector3(data.standUpPosition.x, 0, data.standUpPosition.z).length()) {
                data.state = "standing";
                
                /* to improve*/
                //data.camera.setAttribute("simple-navmesh-constraint", this.simpleNavmeshConstraintBk);
                //data.camera.setAttribute("wasd-controls", this.wasdControlsBk);

                /*make the player able to move again*/
                if(!!data.camera) {
                    data.camera.setAttribute("simple-navmesh-constraint", "navmesh:#navmesh;fall: 5;height:1.65;");
                    data.camera.setAttribute("wasd-controls", "acceleration: 20;");
                }
                return;
            }

        }
    }
});
/* global AFRAME, THREE */

/* Constrain an object to a navmesh, for example place this element after wasd-controls like so:
`wasd-controls navmesh-physics="#navmesh-el"`
*/
if(!!AFRAME.components["simple-navmesh-constraint"])
      delete AFRAME.components["simple-navmesh-constraint"];
AFRAME.registerComponent('simple-navmesh-constraint', {
    schema: {
        navmesh: {
            default: ''
        },
        fall: {
            default: 0
        },
        height: {
            default: 1.6
        },
        jumpHeight: {
            default: 20
        },
        interval: {
            default: 400
        },
        timingFunction: {
            type: 'string'
        },
    },

    init: function () {
        this.lastPosition = new THREE.Vector3();
        this.el.object3D.getWorldPosition(this.lastPosition);

        document.addEventListener('keydown', e => {
            if (e.key != " " || localStorage.getItem('jumpState') == "true") return;
            var initialV = (this.data.interval / 1.0 / 1000 / 2) * (9.8 / 30);
            var cnt = 0;
            localStorage.setItem('jumpState', 'true');
            const upInterval = setInterval(() => { 
                cnt ++;
                localStorage.setItem('posY', Number(localStorage.getItem('posY')) + (initialV - (9.8 / 30) / 1000 * 10 * cnt)) 
            }, 10);
           
            setTimeout(() => {
                clearInterval(upInterval);
                localStorage.setItem('posY', 0);
                localStorage.setItem('jumpState', 'false');
        }, this.data.interval);
        });
    },

    update: function () {
        const els = Array.from(document.querySelectorAll(this.data.navmesh));
        if (els === null) {
            console.warn('navmesh-physics: Did not match any elements');
            this.objects = [];
        } else {
            this.objects = els.map(el => el.object3D);
        }
    },

    tick: (function () {
        const nextPosition = new THREE.Vector3();
        const tempVec = new THREE.Vector3();
        const scanPattern = [
            [0, 1], // Default the next location
            [30, 0.4], // A little to the side shorter range
            [-30, 0.4], // A little to the side shorter range
            [60, 0.2], // Moderately to the side short range
            [-60, 0.2], // Moderately to the side short range
            [80, 0.06], // Perpendicular very short range
            [-80, 0.06], // Perpendicular very short range
        ];
        const down = new THREE.Vector3(0, -1, 0);
        const raycaster = new THREE.Raycaster();
        const gravity = -1;
        const maxYVelocity = 0.5;
        const results = [];
        let yVel = 0;

        return function (time, delta) {
            const el = this.el;
            if (this.objects.length === 0) return;

            this.el.object3D.getWorldPosition(nextPosition);
            if (nextPosition.distanceTo(this.lastPosition) === 0) return;

            let didHit = false;

            // So that it does not get stuck it takes as few samples around the user and finds the most appropriate
            for (const [angle, distance] of scanPattern) {
                tempVec.subVectors(nextPosition, this.lastPosition);
                tempVec.applyAxisAngle(down, angle * Math.PI / 180);
                tempVec.multiplyScalar(distance);
                tempVec.add(this.lastPosition);
                tempVec.y += maxYVelocity;
                tempVec.y -= this.data.height;
                raycaster.set(tempVec, down);
                raycaster.far = this.data.fall > 0 ? this.data.fall + maxYVelocity : Infinity;
                raycaster.intersectObjects(this.objects, true, results);
                if (results.length) {
                    const hitPos = results[0].point;
                    hitPos.y += this.data.height;
                    var jumpVelY = localStorage.getItem('posY') == undefined ? 0: localStorage.getItem('posY');
                    if (nextPosition.y - (hitPos.y - yVel * 2) + jumpVelY > 0.01) {
                        yVel += Math.max(gravity * delta * 0.001, -maxYVelocity);
                        hitPos.y = nextPosition.y + yVel + Number(jumpVelY);
                    } else {
                        hitPos.y = hitPos.y + Number(jumpVelY);
                        yVel = 0;
                    }

                    el.object3D.position.copy(hitPos);
                    this.el.object3D.parent.worldToLocal(this.el.object3D.position);
                    this.lastPosition.copy(hitPos);
                    results.splice(0);
                    didHit = true;
                    break;
                }
            }

            if (!didHit) {
                this.el.object3D.position.copy(this.lastPosition);
                this.el.object3D.parent.worldToLocal(this.el.object3D.position);
            }
        }
    }())
});

if(!!AFRAME.components["model-info"])
      delete AFRAME.components["model-info"];
AFRAME.registerComponent("model-info", {
    init: function () {
        let el = this.el;
        el.addEventListener('model-loaded', update_loadingScreen);
    }
})