MetronicApp.factory('uploadManager', function ($rootScope) {
    var _files = [];
    var _is_completed = false;

    return {
        add: function (file) {
            _files.push(file);
            $rootScope.$broadcast('fileAdded', file.files[0].name);
        },

        clear: function () {
            _files = [];
        },

        files: function () {
            var fileNames = [];
            $.each(_files, function (index, file) {
                fileNames.push(file.files[0].name);
            });
            return fileNames;
        },

        upload: function () {
            $.each(_files, function (index, file) {
                file.submit();
            });
            this.clear();
        },

        setProgress: function (percentage) {
            $rootScope.$broadcast('uploadProgress', percentage);
        },

        setResponse: function(data){
            $rootScope.$broadcast('uploadResponseResult', data.result);
        },

        setCompleted: function(status){
            _is_completed = status;
        },

        isCompleted: function(){
            return _is_completed;
        }
    };
})