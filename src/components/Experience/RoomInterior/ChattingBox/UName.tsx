

type UNameType = {
    uname : string,
}

const UName = (props : UNameType) => {
    return (
        <div className="text-primary">{props.uname}</div>
    )
}

export default UName