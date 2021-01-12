// defining variables
let main_container = document.querySelector('.main_container').offsetTop;
let menu_container_style = document.querySelector('.menu_container').style;
let right_container_style = document.querySelector('.right_container').style;
let main_container_style = document.querySelector('.main_container').style;
let hamburger_style = document.querySelector('.hamburger').style;
let init_scroll_val = 0; // this value will change on scroll, so can't be const

// handling scroll events
window.onscroll = function(){
    // making menu-container and right-container fixed on scroll - on desktop
    if(window.innerWidth > 800){
        if (document.documentElement.scrollTop > main_container) {
            menu_container_style.position = 'fixed';
            menu_container_style.top = 0;
            right_container_style.position = 'fixed';
            right_container_style.top = 0;
            right_container_style.right = 0;
            main_container_style.marginLeft = '20%';
        }
        else{
            menu_container_style.position = 'static';
            right_container_style.position = 'static';
            main_container_style.marginLeft = 0;
        }
    }
    // hiding/showing hamburger icon on scroll up/down - on mobile
    else{
        if(document.documentElement.scrollTop > init_scroll_val+10){
            hamburger_style.display = 'none';
            init_scroll_val = document.documentElement.scrollTop;
        }
        else if(document.documentElement.scrollTop < init_scroll_val-10){
            hamburger_style.display = 'block';
            init_scroll_val = document.documentElement.scrollTop;
        }
    }
}


// handling click events on menu items
document.querySelectorAll('.menuitem').forEach(function(item){
    item.onclick = function(){
        // redirecting to resume on click resume link in menu items
        if(this.dataset.id === 'resume'){
            const resume_link = 'https://drive.google.com/file/d/1uSyuaERWPiyYS04sYee5k5TXNA_B4VM6/view?usp=sharing';
            window.open(resume_link, '_blank');
        }
        // scrolling to content on click menu items
        else{
            // const element = document.querySelector(`#${this.dataset.id}`).offsetTop;
            // window.scrollTo(0, element-10);
            const target = $(`#${this.dataset.id}`);
            $('html').animate({
                scrollTop: target.offset().top-10
            }, 1000);
        }
    }
});

// hiding menu on click anywhere on page
if(window.innerWidth <= 800){
    document.querySelector('html').onclick = function(){
        menu_container_style.display = 'none';
    }
    document.querySelector('.hamburger').onclick = function(e){
        e.stopPropagation();
    }
}

// showing menu items on click hamburger icon on mobile device
document.querySelector('.hamburger img').onclick = function(){
    menu_container_style.display = 'block';
    menu_container_style.position = 'fixed';
    menu_container_style.bottom = 0;
    menu_container_style.zIndex = 1;
    return false;
}