describe("{%= name %}",function(){
    beforeEach(module('{%= name %}'));
    describe("Test",function(){
        it("Should Pass",inject(function(${%= name %}){
            expect(${%= name %}.hello()).toEqual("world");
        }));
    });
});