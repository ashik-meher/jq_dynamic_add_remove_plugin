 <script>

    //works fine to simplly adding and removing dynamically **my version
    //implemented on simple technique

    $(document).ready(function(){
      $('#add-button').click(function(e){
        e.preventDefault();
   
        //var dysec = $('#doc-form').clone(); short cut proves buggy behavior appending same inputs with previous input fields

        var dysec = '<tr id="dysec">';
                              
         dysec +=   '<td><input type="text" name="doc_name[]" class="form-control"></td>';
                      
                        
                        
                        
       
                              
        dysec += '<td><input type="file" name="doc_path[]" class="form-control-file"></td>';
                         

        dysec += '<input type="hidden"  name="post_id[]" value="{{$post_id}}">';

        //var rm = $('<a id="remove" class="btn btn-danger"> Remove</a><div>').clone();
        dysec += '<td><a id="remove" class="btn btn-danger"><i class="fa fa-times" aria-hidden="true"></i></a></td><tr>';
        //dysec = $(dysec).append(rm);
         $('tbody').append(dysec);
    
      })

      $('body').on('click', '#remove', function(){
        //$('#remove').parent('div').remove();
        $(this).closest('tr').remove();
        t =  $(this).closest('tr').remove();
        //var t = $('#remove').parent('#doc-form');
        console.log(t);
      })
    });


</script>
