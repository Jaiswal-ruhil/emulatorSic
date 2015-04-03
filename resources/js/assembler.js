
function generateCode() {
    requestMachCode(getEditorContent());
}


function requestMachCode( text ){
    $.ajax({
        method: "POST",
        url: "/generateCode/",
        data: JSON.stringify({'filename': "tempfile",'code': text }),
        success: function( reply ) {
            console.log( reply, "   ", loader )
            loader.load( reply.code )
            processor.execute();
        },
        error: function( reply ) {
            console.log("not workin");
        },
        contentType:"application/json",
        dataType:'json',
    });
}
