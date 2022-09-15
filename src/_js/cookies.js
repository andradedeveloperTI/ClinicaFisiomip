function cookies (functions){
    const container = document.querySelector('.cookies-container')
    const save = document.querySelector('.cookies-save')
    if(!container || !save) return null

    const localPref = JSON.parse(window.localStorage.getItem('cookies-pref'))
    if(localPref) activateFunctions(localPref)
    
    function getFormPref(){
        return Array.from(document.querySelectorAll('[data-function]')).filter(e => e.checked)
        .map((e) => e.getAttribute('data-function'))      
    }

    function activateFunctions(pref) {
        pref.forEach( f => functions[f]())
        container.style.display = 'none'
        window.localStorage.setItem('cookies-pref', JSON.stringify(pref))
        
    }
    
    function handleSave() {
        const pref = getFormPref()
        activateFunctions(pref)

    }
    
    save.addEventListener('click', handleSave)
}

function analytics(){
    // console.log('Funçao de analytics')
}

function marketing(){
    // INPUT DESABILITADO
    // console.log('Funçao de marketing')
}



cookies({
    analytics,
    marketing
})