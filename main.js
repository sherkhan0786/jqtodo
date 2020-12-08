$(document).ready(function () {
    $('#addTask').click(function (event) {
        event.preventDefault();
        if ($('#taskInp').val() != '') {
            var inpvalue = $("#taskInp").val();
            var add = $('<li><input type="checkbox" class="checkbox"><label class="lb" for="task">' + inpvalue + '</label><input type="text" class="editInp" placeholder="Edit Task"><button>Edit</button><button class="update">Update</button><input type="button" value="Delete" class="delete"></li>');
            $('#todo').append(add);
            $("#taskInp").val('');

            // Delete
            $('.delete').click(function () {
                $(this).parent('li').remove();
            });
            // Edit task
           
            $('.update').click(function(){
                var editUpdate = $(this).siblings('.editInp').val();
                $(this).parent('li').find('.lb').text(editUpdate);
                $('.editInp').val('');
            })
            $('button').click(function () {
                var edit = $(this).siblings('label').text();
                $(this).parent('li').find('.editInp').val(edit);
            });

            // Complete list on check

            $('.checkbox').click(function () {
                if ($(this).prop('checked') == true) {
                    var appn = $(this).parent('li');
                    console.log(appn);
                    $('#complete').append(appn)
                }
                if ($(this).prop('checked') == false) {
                    var appn = $(this).parent('li');
                    console.log(appn);
                    $('#todo').append(appn)
                }
            });

        }
        else{
            alert('Enter your Task')
        }
    });

});
