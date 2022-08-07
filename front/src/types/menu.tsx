export type MenuProps = {
    isOpen: boolean,
    onClose: ()=>void,
}

export type AlertProps = {
    isOpen: boolean,
    setIsOpen: (val:boolean)=>void,
    content: string,
    handleDelete: ()=>void,
}