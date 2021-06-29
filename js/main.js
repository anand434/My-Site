const about = document.querySelector('#about')
const contact = document.querySelector('#contact')
const aboutContent = document.querySelector('#about-content')
const contactContent = document.querySelector('#contact-content')
const projects = document.querySelector('#projects')
const resume = document.querySelector('#resume')
const projectContent = document.querySelector('#project-content')
const resumeContent = document.querySelector('#resume-content')

about.addEventListener('click', () => {
    const aboutBox = new WinBox({
        title: 'About Me',
        width: '400px',
        height: '400px',
        top: 50,
        botom: 50,
        right: 50, 
        left: 50,
        mount: aboutContent,
        onfocus: function() { 
            this.setBackground('#00aa00')
        },
        onblur: function() {
            this.setBackground('#777')
        }
    })
})


contact.addEventListener('click', () => {
    const contactBox = new WinBox({
        title: 'Contact Me',
        width: '400px',
        height: '400px',
        top: 100,
        botom: 50,
        right: 50, 
        left: 100,
        mount: contactContent,
        onfocus: function() { 
            this.setBackground('#00aa00')
        },
        onblur: function() {
            this.setBackground('#777')
        }
    })
})


projects.addEventListener('click', () => {
    const contactBox = new WinBox({
        title: 'Projects',
        width: '400px',
        height: '400px',
        top: 100,
        botom: 50,
        right: 50, 
        left: 100,
        mount: projectContent,
        onfocus: function() { 
            this.setBackground('#00aa00')
        },
        onblur: function() {
            this.setBackground('#777')
        }
    })
})


resume.addEventListener('click', () => {
    const contactBox = new WinBox({
        title: 'Resume',
        width: '400px',
        height: '400px',
        top: 100,
        botom: 50,
        right: 50, 
        left: 100,
        mount: resumeContent,
        onfocus: function() { 
            this.setBackground('#00aa00')
        },
        onblur: function() {
            this.setBackground('#777')
        }
    })
})
