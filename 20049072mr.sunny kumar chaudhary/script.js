const openModalButtons=document.querySelectorAll('[data-modal-target]')
const CloseModalButtons=document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button=>{
button.addEventListener('click',()=>{
const modal=document.querySelector(button.dataset.modalTarget)
openModal(modal)
})
})
overlay.addEventListener('click',()=> {
const modals=document.querySelectorAll('modal.active')
modals.forEach(modal=>{
    closeModal(modal)
})
})
closeModalButtons.forEach(button=>{
    button.addEventListener('click',()=>{
    const modal=button.closet('.modal')
    closeModal(modal)
    })
    })
   
 function openModal(modal){
if(modal == null)return
modal.classlist.add('active')
overlay.classList.add('active')
    }
    function closeModal(modal){
        if(modal == null)return
        modal.classlist.remove('active')
        overlay.classList.remove('active')
            }