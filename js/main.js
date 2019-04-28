var vm = new Vue ({
    el: "#game",
    data : {
        pointYou : 100,
        pointMonster : 100,
        number : 3
    },
    methods : {
        attack : function () {
        this.pointMonster--
        },
        special : function () {

        },
        heal : function () {

        },
        give : function () {

        }
    }
})