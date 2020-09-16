import React from "react"

export default ({toggleItem, buttonName}) => {

    var all = document.getElementsByClassName('table-row');
    var item = document.getElementsByClassName(toggleItem);

    function hide(row){
        for (var i = 0; i < row.length; i ++) {
            row[i].style.display = 'none';
        }
    }

    function show(row){
        for (var i = 0; i < row.length; i ++) {
            row[i].style.display = 'table-row';
        }
    }

    function toggle(){
        hide(all);
        show(item);
    }
    
    return (
        <buttons onClick={toggle} className="button is-small">{buttonName}</buttons>
    )
}