window.navigation = window.navigation || {},
    function(n) {
        navigation.menu = {
        constants: {
            sectionTemplate: '.section-template',
            contentContainer: '#wrapper',
            startSectionMenuItem: '#welcome-menu',
            startSection: '#welcome'
        },

        importSectionsToDOM: function() {
            const links = document.querySelectorAll('link[rel="import"]')
            Array.prototype.forEach.call(links, function (link) {
                let template = link.import.querySelector(navigation.menu.constants.sectionTemplate)
                let clone = document.importNode(template.content, true)
            document.querySelector(navigation.menu.constants.contentContainer).appendChild(clone)
            })
        },

        setMenuOnClickEvent: function () {
            document.body.addEventListener('click', function (event) {
                if (event.target.dataset.section) {
                navigation.menu.hideAllSections()
                navigation.menu.showSection(event)
                }
            })
        },

        showSection: function(event) {
            const sectionId = event.target.dataset.section
            $('#' + sectionId).show()
            $('#' + sectionId + ' section').show()
        },

        showStartSection: function() {
            $(this.constants.startSectionMenuItem).click()
            $(this.constants.startSection).show()
            $(this.constants.startSection + ' section').show()
        },

        hideAllSections: function() {
        $(this.constants.contentContainer + ' section').hide()
        },

        // this init function will run when the document is loaded.
        init: function() {
            this.importSectionsToDOM()
            // this function loads all the rel='imports' that I addded to the head section in index.html and then adds it to the div with the id #wrapper
            this.setMenuOnClickEvent()
            // this function adds the eventlistener and looks for events where the data attribute section is set.
            this.showStartSection()
            // this shows a section when the app is started the first time. 
        }
    };

    n(function() {
        navigation.menu.init()
        })

}(jQuery);