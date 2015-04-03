
var aceEditor = ace.edit(document.getElementById('editor'))
aceEditor.$blockScrolling = Infinity
aceEditor.setFontSize(14)


function getEditorContent(){
    return aceEditor.getValue()
}
