window.addEventListener('keypress', function (e) {
    const insert = document.querySelector('#insert');
    insert.innerHTML = `
    <div class="key">
    ${e.key === ' '? 'space' : e.key}
    <small>s.key</small>
    </div>
    <div class="key">
    ${e.keyCode}
    <small>s.keyCode</small>
    </div>
    <div class="key">
    ${e.code}
    <small>s.code</small>
    </div>
    `
})
window.addEventListener('keypress', function() {
    if(this.document.body.style.background !== 'palegreen'){
        this.document.body.style.background = 'palegreen'
        this.document.body.style.color = 'black'
    }else {
        this.document.body.style.background = 'lightpink'
        this.document.body.style.color = 'black'
    }
})