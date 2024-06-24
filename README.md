# fleek requirements forms

Function to append Form Type, Agent, and Source of a requirement form. 
Works on both iframe and javascript-based forms. 

**Files here:**
1. index.html - demo HTML file to show the URL parameters are working for both javascript-based and iframe forms on the same page.
2. reqform.js - The file contains functions to read the parameters from the URLS and print on the form.
3. mappings.json - file to store the variables assigned to the forms' source links, agents' names against their employee IDs, and source types.

**Usage:**

We need to append 3 parameters to the URL to forward the form types, source, and agent. 
Example: https://www.website.com/?form=logo&a=1100&s=web

where, 
form = form type, here "logo" is the form type to load. 
a = agent, here 1100 is assigned to an agent,
s = source, here web is "website. 

Forms, Agent, and Source values can be seen/updated in the mappings.json file.

**How to call the script on any webpage:**

Call the following script in <head>
<script src="https://fleekreq.github.io/reqform/reqform.js"></script>

Call the following div where you want to show the iframe:
<iframe class="reqform" src="about:blank"></iframe>

On javascript-based forms, we need to add two classes on the "Lead Source" and "Agent" input fields, which are supposed to be hidden on the page. 

  Class to add on Agent field: class="agentfield"
  Example: <input class="agentfield" type="text"/>

  Class to add on Source field: class="sourcefield"
  Example: <option selected="true" value="-Select-" class="sourcefield">-Select-</option>


**OPTIONAL SETTINGS**

Add the following CSS to show the iframe in decent height and width:
<style>
      iframe {
        height: 2500px !important;
        width: 100% !important;
        border: none;
      }
</style>

**NOTE**: Make sure the jquery.js is called on the page where this script is supposed to run. If script is not running, you can call the following script in the <head>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
