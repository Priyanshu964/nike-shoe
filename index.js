const openMenu = () => {
    document.querySelector('aside').className='active';
    }
    const closeMenu = () =>{
        document.querySelector('aside').className=''
    }
    document.getElementById('menu').onclick=e=>{
    e.preventDefault();
    openMenu();
    }
    document.getElementById('clos').onclick  = e =>{
        closeMenu();
    }