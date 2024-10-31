// NOTICE!!! Initially embedded in our docs this JavaScript
// file contains elements that can help you create reproducible
// use cases in StackBlitz for instance.
// In a real project please adapt this content to your needs.
// ++++++++++++++++++++++++++++++++++++++++++

/*!
 * JavaScript for Bootstrap's docs (https://getbootstrap.com/)
 * Copyright 2011-2023 The Bootstrap Authors
 * Licensed under the Creative Commons Attribution 3.0 Unported License.
 * For details, see https://creativecommons.org/licenses/by/3.0/.
 */

/* global bootstrap: false */

(() => {
  'use strict'

  // --------
  // Tooltips
  // --------
  // Instantiate all tooltips in a docs or StackBlitz
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
    .forEach(tooltip => {
      new bootstrap.Tooltip(tooltip)
    })

  // --------
  // Popovers
  // --------
  // Instantiate all popovers in docs or StackBlitz
  document.querySelectorAll('[data-bs-toggle="popover"]')
    .forEach(popover => {
      new bootstrap.Popover(popover)
    })

  // -------------------------------
  // Toasts
  // -------------------------------
  // Used by 'Placement' example in docs or StackBlitz
  const toastPlacement = document.getElementById('toastPlacement')
  if (toastPlacement) {
    document.getElementById('selectToastPlacement').addEventListener('change', function () {
      if (!toastPlacement.dataset.originalClass) {
        toastPlacement.dataset.originalClass = toastPlacement.className
      }

      toastPlacement.className = `${toastPlacement.dataset.originalClass} ${this.value}`
    })
  }

  // Instantiate all toasts in docs pages only
  document.querySelectorAll('.bd-example .toast')
    .forEach(toastNode => {
      const toast = new bootstrap.Toast(toastNode, {
        autohide: false
      })

      toast.show()
    })

  // Instantiate all toasts in docs pages only
  // js-docs-start live-toast
  const toastTrigger = document.getElementById('liveToastBtn')
  const toastLiveExample = document.getElementById('liveToast')

  if (toastTrigger) {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    toastTrigger.addEventListener('click', () => {
      toastBootstrap.show()
    })
  }
  // js-docs-end live-toast

  // -------------------------------
  // Alerts
  // -------------------------------
  // Used in 'Show live alert' example in docs or StackBlitz

  // js-docs-start live-alert1
  const alertPlaceholder1 = document.getElementById('liveAlertPlaceholder1')
  const appendAlert1 = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      `<div class="alert alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>'
    ].join('')

    alertPlaceholder1.append(wrapper)
  }

  const alertTrigger1 = document.getElementById('liveAlertBtn1')
  if (alertTrigger1) {
    alertTrigger1.addEventListener('click', () => {
      appendAlert1('Nice, you triggered this alert message!', 'success')
    })
  }
  // js-docs-end live-alert1

    // js-docs-start live-alert2
    const alertPlaceholder2 = document.getElementById('liveAlertPlaceholder2')
    const appendAlert2 = (message, type) => {
      const wrapper = document.createElement('div')
      wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
      ].join('')
  
      alertPlaceholder2.append(wrapper)
    }
  
    const alertTrigger2 = document.getElementById('liveAlertBtn2')
    if (alertTrigger2) {
      alertTrigger2.addEventListener('click', () => {
        appendAlert2('Nice, you triggered this alert message!', 'success')
      })
    }
    // js-docs-end live-alert2

     // js-docs-start live-alert3
     const alertPlaceholder3 = document.getElementById('liveAlertPlaceholder3')
     const appendAlert3 = (message, type) => {
       const wrapper = document.createElement('div')
       wrapper.innerHTML = [
         `<div class="alert alert-${type} alert-dismissible" role="alert">`,
         `   <div>${message}</div>`,
         '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
         '</div>'
       ].join('')
   
       alertPlaceholder3.append(wrapper)
     }
   
     const alertTrigger3 = document.getElementById('liveAlertBtn3')
     if (alertTrigger3) {
       alertTrigger3.addEventListener('click', () => {
         appendAlert3('Nice, you triggered this alert message!', 'success')
       })
     }
     // js-docs-end live-alert3

      // js-docs-start live-alert4
    const alertPlaceholder4 = document.getElementById('liveAlertPlaceholder4')
    const appendAlert4 = (message, type) => {
      const wrapper = document.createElement('div')
      wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
      ].join('')
  
      alertPlaceholder4.append(wrapper)
    }
  
    const alertTrigger4 = document.getElementById('liveAlertBtn4')
    if (alertTrigger4) {
      alertTrigger4.addEventListener('click', () => {
        appendAlert4('Nice, you triggered this alert message!', 'success')
      })
    }
    // js-docs-end live-alert4

     // js-docs-start live-alert5
     const alertPlaceholder5 = document.getElementById('liveAlertPlaceholder5')
     const appendAlert5 = (message, type) => {
       const wrapper = document.createElement('div')
       wrapper.innerHTML = [
         `<div class="alert alert-${type} alert-dismissible" role="alert">`,
         `   <div>${message}</div>`,
         '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
         '</div>'
       ].join('')
   
       alertPlaceholder5.append(wrapper)
     }
   
     const alertTrigger5 = document.getElementById('liveAlertBtn5')
     if (alertTrigger5) {
       alertTrigger5.addEventListener('click', () => {
         appendAlert5('Nice, you triggered this alert message!', 'success')
       })
     }
     // js-docs-end live-alert

  // --------
  // Carousels
  // --------
  // Instantiate all non-autoplaying carousels in docs or StackBlitz
  document.querySelectorAll('.carousel:not([data-bs-ride="carousel"])')
    .forEach(carousel => {
      bootstrap.Carousel.getOrCreateInstance(carousel)
    })

  // -------------------------------
  // Checks & Radios
  // -------------------------------
  // Indeterminate checkbox example in docs and StackBlitz
  document.querySelectorAll('.bd-example-indeterminate [type="checkbox"]')
    .forEach(checkbox => {
      if (checkbox.id.includes('Indeterminate')) {
        checkbox.indeterminate = true
      }
    })

  // -------------------------------
  // Links
  // -------------------------------
  // Disable empty links in docs examples only
  document.querySelectorAll('.bd-content [href="#"]')
    .forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault()
      })
    })

  // -------------------------------
  // Modal
  // -------------------------------
  // Modal 'Varying modal content' example in docs and StackBlitz
  // js-docs-start varying-modal-content
  const exampleModal = document.getElementById('exampleModal')
  if (exampleModal) {
    exampleModal.addEventListener('show.bs.modal', event => {
      // Button that triggered the modal
      const button = event.relatedTarget
      // Extract info from data-bs-* attributes
      const recipient = button.getAttribute('data-bs-whatever')
      // If necessary, you could initiate an Ajax request here
      // and then do the updating in a callback.

      // Update the modal's content.
      const modalTitle = exampleModal.querySelector('.modal-title')
      const modalBodyInput = exampleModal.querySelector('.modal-body input')

      modalTitle.textContent = `New message to ${recipient}`
      modalBodyInput.value = recipient
    })
  }
  // js-docs-end varying-modal-content

  // -------------------------------
  // Offcanvas
  // -------------------------------
  // 'Offcanvas components' example in docs only
  const myOffcanvas = document.querySelectorAll('.bd-example-offcanvas .offcanvas')
  if (myOffcanvas) {
    myOffcanvas.forEach(offcanvas => {
      offcanvas.addEventListener('show.bs.offcanvas', event => {
        event.preventDefault()
      }, false)
    })
  }
})()
