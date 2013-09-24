angular.module("{%= name %}",[])
    .factory("${%= name %}",[
        function(){
            return {
                hello:function(){
                    return "world";
                }
            };
    }]);