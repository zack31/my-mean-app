

angular.module('bootstrapModal', []).factory('bootstrapModal', ["$document",
    function($document) {
        return {
            close: function() {
                $('.modal-open').removeClass("modal-open");
                $('.modal-backdrop').remove();
                $document.find('.modal').modal('hide');
            },
            open:function(id){
                $document.find('#'+id).modal();
            }
        }
    }
]);
