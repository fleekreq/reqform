
       $(document).ready(function() {
              alert('Thankss');
            // Function to get URL parameters
            function getUrlParameter(name) {
                name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
                var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
                var results = regex.exec(location.search);
                return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
            }

            // Function to map parameter values to actual values
            function mapValue(param, mapping) {
                return mapping[param] || param;
            }

            // Fetch mappings from an external JSON file
            $.getJSON('mappings.json', function(data) {
                // Define mappings for 'a', 's', and 'form' from JSON data
                var aMapping = data.aMapping;
                var sMapping = data.sMapping;
                var formMapping = data.formMapping;

                // Get the values of parameters 'a', 's', and 'form'
                var paramA = getUrlParameter('a');
                var paramS = getUrlParameter('s');
                var paramForm = getUrlParameter('form');

                // Map the values to their actual values
                var actualA = mapValue(paramA, aMapping);
                var actualS = mapValue(paramS, sMapping);
                var actualForm = mapValue(paramForm, formMapping);

                // Update the text field with class 'namefield'
                $('.agentfield').val(actualA);

                // Update the dropdown with class 'sourcefield'
                $('.sourcefield').val(actualS);

                // Update the iframe with class 'reqform'
                if (actualForm !== paramForm) {
                    var iframeSrc = actualForm;
                    if (actualA) {
                        iframeSrc += '?a=' + encodeURIComponent(actualA);
                    }
                    if (actualS) {
                        iframeSrc += (actualA ? '&' : '?') + 's=' + encodeURIComponent(actualS);
                    }
                    $('.reqform').attr('src', iframeSrc);
                }
            });
        });
