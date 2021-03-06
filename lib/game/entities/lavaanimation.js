ig.module('game.entities.lavaanimation')
.requires('impact.entity')
.defines(function(){
    EntityLavaanimation = ig.Entity.extend({
        size: {x: 32, y: 8},
        state: 1,
        gravityFactor: 0,

        animSheet: new ig.AnimationSheet( 'media/lava-animation.png', 32, 8 ),

        init: function( x, y, settings ) {
            this.parent( x, y, settings );
            this.addAnim( 'state1', 0.15, [ 0,  1,  2,  3] );
            this.addAnim( 'state2', 0.15, [ 4,  5,  6,  7] );
            this.addAnim( 'state3', 0.15, [ 8,  9, 10, 11] );
            this.addAnim( 'state4', 0.15, [12, 13, 14, 15] );

            this.currentAnim = this.anims["state" + this.state];
        }
    });
});
