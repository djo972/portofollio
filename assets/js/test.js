(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 235,
	height: 341,
	fps: 24,
	color: "#3DA3A2",
	manifest: [
		{src:"assets/images/bird.png", id:"bird"},
		{src:"assets/images/black.png", id:"black"},
		{src:"assets/images/blanche.png", id:"blanche"},
		{src:"assets/images/camion.png", id:"camion"},
		{src:"assets/images/copiered.png", id:"copiered"},
		{src:"assets/images/copieSanstitre1.png", id:"copieSanstitre1"},
		{src:"assets/images/fenetre.png", id:"fenetre"},
		{src:"assets/images/grise.png", id:"grise"},
		{src:"assets/images/laposte.png", id:"laposte"},
		{src:"assets/images/red.png", id:"red"},
		{src:"assets/images/rouge.png", id:"rouge"},
		{src:"assets/images/Sanstitre1.png", id:"Sanstitre1"},
		{src:"assets/images/scene.png", id:"scene"},
		{src:"assets/images/vert.png", id:"vert"},
		{src:"assets/images/violet.png", id:"violet"},
		{src:"assets/images/volet.png", id:"volet"}
	]
};

// stage content:
(lib.Sansnom2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 3
	this.instance = new lib.volet();
	this.instance.setTransform(9,161.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(450));

	// Calque 2
	this.instance_1 = new lib.Interpoler13("synched",0);
	this.instance_1.setTransform(117.5,170.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:117.6},449).wait(1));

	// black bas
	this.instance_2 = new lib.Interpoler12("synched",0);
	this.instance_2.setTransform(-102.5,291.9,1,1,0,0,0,3,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:0,rotation:-0.5,x:298.7,y:288.9},108).wait(341).to({rotation:0},0).wait(1));

	// white bas
	this.instance_3 = new lib.blanche();
	this.instance_3.setTransform(-31.8,271.9,1.163,1.163,0,0,180);

	this.instance_4 = new lib.Interpoler6("synched",0);
	this.instance_4.setTransform(-75.4,293.4);
	this.instance_4._off = true;

	this.instance_5 = new lib.Interpoler7("synched",0);
	this.instance_5.setTransform(297.7,289.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},57).to({state:[{t:this.instance_5}]},391).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).to({_off:true,x:297.7,y:289.4},57).wait(392));

	// camionette blanche
	this.instance_6 = new lib.camion();
	this.instance_6.setTransform(-191.1,236.2,0.697,0.697,0,0,180);

	this.instance_7 = new lib.Interpoler23("synched",0);
	this.instance_7.setTransform(-89.5,275.6);
	this.instance_7._off = true;

	this.instance_8 = new lib.Interpoler24("synched",0);
	this.instance_8.setTransform(304.5,274.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.instance_7}]},348).to({state:[{t:this.instance_8}]},54).wait(48));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(348).to({_off:false},0).to({_off:true,x:304.5,y:274.6},54).wait(48));

	// jaune
	this.instance_9 = new lib.copieSanstitre1();
	this.instance_9.setTransform(-3.2,268.9,1.192,1.192,0,0,180);

	this.instance_10 = new lib.Interpoler27("synched",0);
	this.instance_10.setTransform(-43.5,291);
	this.instance_10._off = true;

	this.instance_11 = new lib.Interpoler28("synched",0);
	this.instance_11.setTransform(283.5,287.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_9}]},53).to({state:[{t:this.instance_10}]},335).to({state:[{t:this.instance_11}]},61).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(388).to({_off:false},0).to({_off:true,x:283.5,y:287.8},61).wait(1));

	// bordeau
	this.instance_12 = new lib.copiered();
	this.instance_12.setTransform(-3.2,269.3,1.182,1.182,0,0,180);

	this.instance_13 = new lib.Interpoler35("synched",0);
	this.instance_13.setTransform(-51.4,283.8);
	this.instance_13._off = true;

	this.instance_14 = new lib.Interpoler36("synched",0);
	this.instance_14.setTransform(294.3,290.2);

	this.instance_15 = new lib.Interpoler34("synched",0);
	this.instance_15.setTransform(-48.7,277.2);
	this.instance_15._off = true;

	this.instance_16 = new lib.Interpoler33("synched",0);
	this.instance_16.setTransform(281.7,267.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_12}]},53).to({state:[{t:this.instance_13}]},184).to({state:[{t:this.instance_14}]},70).to({state:[{t:this.instance_15}]},81).to({state:[{t:this.instance_15}]},48).to({state:[{t:this.instance_16}]},1).wait(13));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(237).to({_off:false},0).to({_off:true,x:294.3,y:290.2},70).wait(143));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(388).to({_off:false},0).to({x:285.5,y:267.2},48).to({_off:true,x:281.7},1).wait(13));

	// gris
	this.instance_17 = new lib.Interpoler1("synched",0);
	this.instance_17.setTransform(-156.5,291.4,1.163,1.163,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(132).to({x:-50.5,y:293.4},0).to({x:283.6,y:290.4},53).wait(264).to({startPosition:0},0).wait(1));

	// laposte
	this.instance_18 = new lib.laposte();
	this.instance_18.setTransform(275,179.3,0.709,0.709);

	this.instance_19 = new lib.Interpoler18("synched",0);
	this.instance_19.setTransform(340.6,215.8);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_18}]}).to({state:[{t:this.instance_19}]},192).to({state:[{t:this.instance_19}]},24).to({state:[{t:this.instance_19}]},33).to({state:[{t:this.instance_19}]},9).to({state:[{t:this.instance_19}]},15).to({state:[{t:this.instance_19}]},37).to({state:[{t:this.instance_19}]},18).to({state:[{t:this.instance_19}]},11).wait(111));
	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(192).to({_off:false},0).to({x:156.5,y:194.8},24).wait(33).to({startPosition:0},0).to({regX:-5,regY:-2,x:77.5,y:191.8},9).wait(15).to({startPosition:0},0).wait(37).to({startPosition:0},0).to({x:10.5,y:216.8},18).to({x:-95.5},11).wait(111));

	// gris haut
	this.instance_20 = new lib.Interpoler1("synched",0);
	this.instance_20.setTransform(353.5,232.4);

	this.instance_21 = new lib.Interpoler2("synched",0);
	this.instance_21.setTransform(-81.5,232.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_20}]}).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},98).to({state:[{t:this.instance_21}]},350).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_20).to({x:355},1).to({_off:true,x:-81.5},98).wait(351));

	// red haut
	this.instance_22 = new lib.Interpoler11("synched",0);
	this.instance_22.setTransform(421.5,232.4);

	this.instance_23 = new lib.Interpoler10("synched",0);
	this.instance_23.setTransform(281.5,240.4);
	this.instance_23._off = true;

	this.instance_24 = new lib.Interpoler8("synched",0);
	this.instance_24.setTransform(142.4,237.4);
	this.instance_24._off = true;

	this.instance_25 = new lib.Interpoler9("synched",0);
	this.instance_25.setTransform(-66.6,243.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_22}]}).to({state:[{t:this.instance_23}]},97).to({state:[{t:this.instance_24}]},34).to({state:[{t:this.instance_25}]},19).to({state:[{t:this.instance_25}]},299).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_22).to({_off:true,x:281.5,y:240.4},97).wait(353));
	this.timeline.addTween(cjs.Tween.get(this.instance_23).to({_off:false},97).to({_off:true,x:142.4,y:237.4},34).wait(319));
	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(97).to({_off:false},34).to({_off:true,x:-66.6,y:243.4},19).wait(300));

	// vert
	this.instance_26 = new lib.vert();
	this.instance_26.setTransform(254.1,212.7,1.034,1.034);

	this.instance_27 = new lib.Interpoler22("synched",0);
	this.instance_27.setTransform(293.9,231.8);
	this.instance_27._off = true;

	this.instance_28 = new lib.Interpoler21("synched",0);
	this.instance_28.setTransform(125.8,231.8);
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_26}]}).to({state:[{t:this.instance_27}]},302).to({state:[{t:this.instance_28}]},25).to({state:[{t:this.instance_28}]},22).wait(101));
	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(302).to({_off:false},0).to({_off:true,x:125.8},25).wait(123));
	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(302).to({_off:false},25).to({x:-43.1,y:233},22).wait(101));

	// violet
	this.instance_29 = new lib.violet();
	this.instance_29.setTransform(247.1,213.9);

	this.instance_30 = new lib.Interpoler25("synched",0);
	this.instance_30.setTransform(285.6,232.4);
	this.instance_30._off = true;

	this.instance_31 = new lib.Interpoler26("synched",0);
	this.instance_31.setTransform(-49.5,236.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_29}]}).to({state:[{t:this.instance_30}]},377).to({state:[{t:this.instance_31}]},41).wait(32));
	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(377).to({_off:false},0).to({_off:true,x:-49.5,y:236.8},41).wait(32));

	// white haut
	this.instance_32 = new lib.blanche();
	this.instance_32.setTransform(250.2,214.4,1.026,1.026);

	this.instance_33 = new lib.Interpoler14("synched",0);
	this.instance_33.setTransform(288.7,233.3);
	this.instance_33._off = true;

	this.instance_34 = new lib.Interpoler15("synched",0);
	this.instance_34.setTransform(-44.4,236.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_32}]}).to({state:[{t:this.instance_33}]},168).to({state:[{t:this.instance_34}]},30).to({state:[]},251).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(168).to({_off:false},0).to({_off:true,x:-44.4,y:236.3},30).wait(252));

	// Calque 1
	this.instance_35 = new lib.scene();
	this.instance_35.setTransform(0,12);

	this.instance_36 = new lib.Interpoler3("synched",0);
	this.instance_36.setTransform(117.5,176.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_35}]}).to({state:[{t:this.instance_36}]},449).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-202.6,170.5,779.1,341);


// symbols:
(lib.bird = function() {
	this.initialize(img.bird);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,38,33);


(lib.black = function() {
	this.initialize(img.black);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,77,38);


(lib.blanche = function() {
	this.initialize(img.blanche);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,75,37);


(lib.camion = function() {
	this.initialize(img.camion);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,185,104);


(lib.copiered = function() {
	this.initialize(img.copiered);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,77,37);


(lib.copieSanstitre1 = function() {
	this.initialize(img.copieSanstitre1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,73,37);


(lib.fenetre = function() {
	this.initialize(img.fenetre);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,235,341);


(lib.grise = function() {
	this.initialize(img.grise);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,75,37);


(lib.laposte = function() {
	this.initialize(img.laposte);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,185,103);


(lib.red = function() {
	this.initialize(img.red);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,77,37);


(lib.rouge = function() {
	this.initialize(img.rouge);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,75,37);


(lib.Sanstitre1 = function() {
	this.initialize(img.Sanstitre1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,73,37);


(lib.scene = function() {
	this.initialize(img.scene);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,235,329);


(lib.vert = function() {
	this.initialize(img.vert);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,77,37);


(lib.violet = function() {
	this.initialize(img.violet);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,77,37);


(lib.volet = function() {
	this.initialize(img.volet);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,216,104);


(lib.Interpoler36 = function() {
	this.initialize();

	// Calque 1
	this.instance = new lib.copiered();
	this.instance.setTransform(45.5,-21.8,1.182,1.182,0,0,180);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-45.5,-21.8,91,43.8);


(lib.Interpoler35 = function() {
	this.initialize();

	// Calque 1
	this.instance = new lib.copiered();
	this.instance.setTransform(45.5,-21.8,1.182,1.182,0,0,180);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-45.5,-21.8,91,43.8);


(lib.Interpoler34 = function() {
	this.initialize();

	// Calque 1
	this.instance = new lib.copiered();
	this.instance.setTransform(45.5,-21.8,1.182,1.182,0,0,180);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-45.5,-21.8,91,43.8);


(lib.Interpoler33 = function() {
	this.initialize();

	// Calque 1
	this.instance = new lib.copiered();
	this.instance.setTransform(45.5,-21.8,1.182,1.182,0,0,180);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-45.5,-21.8,91,43.8);


(lib.Interpoler28 = function() {
	this.initialize();

	// Calque 1
	this.instance = new lib.copieSanstitre1();
	this.instance.setTransform(43.5,-22,1.192,1.192,0,0,180);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-43.5,-22,87,44.1);


(lib.Interpoler27 = function() {
	this.initialize();

	// Calque 1
	this.instance = new lib.copieSanstitre1();
	this.instance.setTransform(43.5,-22,1.192,1.192,0,0,180);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-43.5,-22,87,44.1);


(lib.Interpoler26 = function() {
	this.initialize();

	// Calque 1
	this.instance = new lib.violet();
	this.instance.setTransform(-38.5,-18.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-38.5,-18.5,77,37);


(lib.Interpoler25 = function() {
	this.initialize();

	// Calque 1
	this.instance = new lib.violet();
	this.instance.setTransform(-38.5,-18.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-38.5,-18.5,77,37);


(lib.Interpoler24 = function() {
	this.initialize();

	// Calque 1
	this.instance = new lib.camion();
	this.instance.setTransform(64.5,-36.2,0.697,0.697,0,0,180);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-64.5,-36.2,129,72.6);


(lib.Interpoler23 = function() {
	this.initialize();

	// Calque 1
	this.instance = new lib.camion();
	this.instance.setTransform(64.5,-36.2,0.697,0.697,0,0,180);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-64.5,-36.2,129,72.6);


(lib.Interpoler22 = function() {
	this.initialize();

	// Calque 1
	this.instance = new lib.vert();
	this.instance.setTransform(-39.8,-19.1,1.034,1.034);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39.8,-19.1,79.7,38.3);


(lib.Interpoler21 = function() {
	this.initialize();

	// Calque 1
	this.instance = new lib.vert();
	this.instance.setTransform(-39.8,-19.1,1.034,1.034);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39.8,-19.1,79.7,38.3);


(lib.Interpoler18 = function() {
	this.initialize();

	// Calque 1
	this.instance = new lib.laposte();
	this.instance.setTransform(-65.5,-36.5,0.709,0.709);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-65.5,-36.5,131.1,73);


(lib.Interpoler15 = function() {
	this.initialize();

	// Calque 1
	this.instance = new lib.blanche();
	this.instance.setTransform(-38.5,-18.9,1.026,1.026);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-38.5,-18.9,77,38);


(lib.Interpoler14 = function() {
	this.initialize();

	// Calque 1
	this.instance = new lib.blanche();
	this.instance.setTransform(-38.4,-18.9,1.026,1.026);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-38.4,-18.9,77,38);


(lib.Interpoler13 = function() {
	this.initialize();

	// Calque 1
	this.instance = new lib.fenetre();
	this.instance.setTransform(-117.5,-170.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-117.5,-170.5,235,341);


(lib.Interpoler12 = function() {
	this.initialize();

	// Calque 1
	this.instance = new lib.black();
	this.instance.setTransform(42.6,-21,1.105,1.105,0,0,180);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-42.5,-21,85.1,42);


(lib.Interpoler11 = function() {
	this.initialize();

	// Calque 1
	this.instance = new lib.rouge();
	this.instance.setTransform(-37.5,-18.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-37.5,-18.5,75,37);


(lib.Interpoler10 = function() {
	this.initialize();

	// Calque 1
	this.instance = new lib.rouge();
	this.instance.setTransform(-37.5,-18.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-37.5,-18.5,75,37);


(lib.Interpoler9 = function() {
	this.initialize();

	// Calque 1
	this.instance = new lib.rouge();
	this.instance.setTransform(-37.5,-18.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-37.5,-18.5,75,37);


(lib.Interpoler8 = function() {
	this.initialize();

	// Calque 1
	this.instance = new lib.rouge();
	this.instance.setTransform(-37.5,-18.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-37.5,-18.5,75,37);


(lib.Interpoler7 = function() {
	this.initialize();

	// Calque 1
	this.instance = new lib.blanche();
	this.instance.setTransform(43.6,-21.5,1.163,1.163,0,0,180);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-43.6,-21.5,87.2,43);


(lib.Interpoler6 = function() {
	this.initialize();

	// Calque 1
	this.instance = new lib.blanche();
	this.instance.setTransform(43.6,-21.5,1.163,1.163,0,0,180);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-43.6,-21.5,87.2,43);


(lib.Interpoler3 = function() {
	this.initialize();

	// Calque 1
	this.instance = new lib.scene();
	this.instance.setTransform(-117.5,-164.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-117.5,-164.5,235,329);


(lib.Interpoler2 = function() {
	this.initialize();

	// Calque 1
	this.instance = new lib.grise();
	this.instance.setTransform(-37.5,-18.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-37.5,-18.5,75,37);


(lib.Interpoler1 = function() {
	this.initialize();

	// Calque 1
	this.instance = new lib.grise();
	this.instance.setTransform(-37.5,-18.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-37.5,-18.5,75,37);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;







/**!
 * easyPieChart
 * Lightweight plugin to render simple, animated and retina optimized pie charts
 *
 * @license 
 * @author Robert Fleischmann <rendro87@gmail.com> (http://robert-fleischmann.de)
 * @version 2.1.4
 **/

(function(root, factory) {
    if(typeof exports === 'object') {
        module.exports = factory(require('jquery'));
    }
    else if(typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    }
    else {
        factory(root.jQuery);
    }
}(this, function($) {
/**
 * Renderer to render the chart on a canvas object
 * @param {DOMElement} el      DOM element to host the canvas (root of the plugin)
 * @param {object}     options options object of the plugin
 */
var CanvasRenderer = function(el, options) {
	var cachedBackground;
	var canvas = document.createElement('canvas');

	el.appendChild(canvas);

	if (typeof(G_vmlCanvasManager) !== 'undefined') {
		G_vmlCanvasManager.initElement(canvas);
	}

	var ctx = canvas.getContext('2d');

	canvas.width = canvas.height = options.size;

	// canvas on retina devices
	var scaleBy = 1;
	if (window.devicePixelRatio > 1) {
		scaleBy = window.devicePixelRatio;
		canvas.style.width = canvas.style.height = [options.size, 'px'].join('');
		canvas.width = canvas.height = options.size * scaleBy;
		ctx.scale(scaleBy, scaleBy);
	}

	// move 0,0 coordinates to the center
	ctx.translate(options.size / 2, options.size / 2);

	// rotate canvas -90deg
	ctx.rotate((-1 / 2 + options.rotate / 180) * Math.PI);

	var radius = (options.size - options.lineWidth) / 2;
	if (options.scaleColor && options.scaleLength) {
		radius -= options.scaleLength + 2; // 2 is the distance between scale and bar
	}

	// IE polyfill for Date
	Date.now = Date.now || function() {
		return +(new Date());
	};

	/**
	 * Draw a circle around the center of the canvas
	 * @param {strong} color     Valid CSS color string
	 * @param {number} lineWidth Width of the line in px
	 * @param {number} percent   Percentage to draw (float between -1 and 1)
	 */
	var drawCircle = function(color, lineWidth, percent) {
		percent = Math.min(Math.max(-1, percent || 0), 1);
		var isNegative = percent <= 0 ? true : false;

		ctx.beginPath();
		ctx.arc(0, 0, radius, 0, Math.PI * 2 * percent, isNegative);

		ctx.strokeStyle = color;
		ctx.lineWidth = lineWidth;

		ctx.stroke();
	};

	/**
	 * Draw the scale of the chart
	 */
	var drawScale = function() {
		var offset;
		var length;

		ctx.lineWidth = 1;
		ctx.fillStyle = options.scaleColor;

		ctx.save();
		for (var i = 24; i > 0; --i) {
			if (i % 6 === 0) {
				length = options.scaleLength;
				offset = 0;
			} else {
				length = options.scaleLength * 0.6;
				offset = options.scaleLength - length;
			}
			ctx.fillRect(-options.size/2 + offset, 0, length, 1);
			ctx.rotate(Math.PI / 12);
		}
		ctx.restore();
	};

	/**
	 * Request animation frame wrapper with polyfill
	 * @return {function} Request animation frame method or timeout fallback
	 */
	var reqAnimationFrame = (function() {
		return  window.requestAnimationFrame ||
				window.webkitRequestAnimationFrame ||
				window.mozRequestAnimationFrame ||
				function(callback) {
					window.setTimeout(callback, 1000 / 60);
				};
	}());

	/**
	 * Draw the background of the plugin including the scale and the track
	 */
	var drawBackground = function() {
		if(options.scaleColor) drawScale();
		if(options.trackColor) drawCircle(options.trackColor, options.lineWidth, 1);
	};

  /**
    * Canvas accessor
   */
  this.getCanvas = function() {
    return canvas;
  };
  
  /**
    * Canvas 2D context 'ctx' accessor
   */
  this.getCtx = function() {
    return ctx;
  };

	/**
	 * Clear the complete canvas
	 */
	this.clear = function() {
		ctx.clearRect(options.size / -2, options.size / -2, options.size, options.size);
	};

	/**
	 * Draw the complete chart
	 * @param {number} percent Percent shown by the chart between -100 and 100
	 */
	this.draw = function(percent) {
		// do we need to render a background
		if (!!options.scaleColor || !!options.trackColor) {
			// getImageData and putImageData are supported
			if (ctx.getImageData && ctx.putImageData) {
				if (!cachedBackground) {
					drawBackground();
					cachedBackground = ctx.getImageData(0, 0, options.size * scaleBy, options.size * scaleBy);
				} else {
					ctx.putImageData(cachedBackground, 0, 0);
				}
			} else {
				this.clear();
				drawBackground();
			}
		} else {
			this.clear();
		}

		ctx.lineCap = options.lineCap;

		// if barcolor is a function execute it and pass the percent as a value
		var color;
		if (typeof(options.barColor) === 'function') {
			color = options.barColor(percent);
		} else {
			color = options.barColor;
		}

		// draw bar
		drawCircle(color, options.lineWidth, percent / 100);
	}.bind(this);

	/**
	 * Animate from some percent to some other percentage
	 * @param {number} from Starting percentage
	 * @param {number} to   Final percentage
	 */
	this.animate = function(from, to) {
		var startTime = Date.now();
		options.onStart(from, to);
		var animation = function() {
			var process = Math.min(Date.now() - startTime, options.animate.duration);
			var currentValue = options.easing(this, process, from, to - from, options.animate.duration);
			this.draw(currentValue);
			options.onStep(from, to, currentValue);
			if (process >= options.animate.duration) {
				options.onStop(from, to);
			} else {
				reqAnimationFrame(animation);
			}
		}.bind(this);

		reqAnimationFrame(animation);
	}.bind(this);
};

var EasyPieChart = function(el, opts) {
	var defaultOptions = {
		barColor: '#ef1e25',
		trackColor: '#f9f9f9',
		scaleColor: '#dfe0e0',
		scaleLength: 5,
		lineCap: 'round',
		lineWidth: 3,
		size: 110,
		rotate: 0,
		animate: {
			duration: 1000,
			enabled: true
		},
		easing: function (x, t, b, c, d) { // more can be found here: http://gsgd.co.uk/sandbox/jquery/easing/
			t = t / (d/2);
			if (t < 1) {
				return c / 2 * t * t + b;
			}
			return -c/2 * ((--t)*(t-2) - 1) + b;
		},
		onStart: function(from, to) {
			return;
		},
		onStep: function(from, to, currentValue) {
			return;
		},
		onStop: function(from, to) {
			return;
		}
	};

	// detect present renderer
	if (typeof(CanvasRenderer) !== 'undefined') {
		defaultOptions.renderer = CanvasRenderer;
	} else if (typeof(SVGRenderer) !== 'undefined') {
		defaultOptions.renderer = SVGRenderer;
	} else {
		throw new Error('Please load either the SVG- or the CanvasRenderer');
	}

	var options = {};
	var currentValue = 0;

	/**
	 * Initialize the plugin by creating the options object and initialize rendering
	 */
	var init = function() {
		this.el = el;
		this.options = options;

		// merge user options into default options
		for (var i in defaultOptions) {
			if (defaultOptions.hasOwnProperty(i)) {
				options[i] = opts && typeof(opts[i]) !== 'undefined' ? opts[i] : defaultOptions[i];
				if (typeof(options[i]) === 'function') {
					options[i] = options[i].bind(this);
				}
			}
		}

		// check for jQuery easing
		if (typeof(options.easing) === 'string' && typeof(jQuery) !== 'undefined' && jQuery.isFunction(jQuery.easing[options.easing])) {
			options.easing = jQuery.easing[options.easing];
		} else {
			options.easing = defaultOptions.easing;
		}

		// process earlier animate option to avoid bc breaks
		if (typeof(options.animate) === 'number') {
			options.animate = {
				duration: options.animate,
				enabled: true
			};
		}

		if (typeof(options.animate) === 'boolean' && !options.animate) {
			options.animate = {
				duration: 1000,
				enabled: options.animate
			};
		}

		// create renderer
		this.renderer = new options.renderer(el, options);

		// initial draw
		this.renderer.draw(currentValue);

		// initial update
		if (el.dataset && el.dataset.percent) {
			this.update(parseFloat(el.dataset.percent));
		} else if (el.getAttribute && el.getAttribute('data-percent')) {
			this.update(parseFloat(el.getAttribute('data-percent')));
		}
	}.bind(this);

	/**
	 * Update the value of the chart
	 * @param  {number} newValue Number between 0 and 100
	 * @return {object}          Instance of the plugin for method chaining
	 */
	this.update = function(newValue) {
		newValue = parseFloat(newValue);
		if (options.animate.enabled) {
			this.renderer.animate(currentValue, newValue);
		} else {
			this.renderer.draw(newValue);
		}
		currentValue = newValue;
		return this;
	}.bind(this);

	/**
	 * Disable animation
	 * @return {object} Instance of the plugin for method chaining
	 */
	this.disableAnimation = function() {
		options.animate.enabled = false;
		return this;
	};

	/**
	 * Enable animation
	 * @return {object} Instance of the plugin for method chaining
	 */
	this.enableAnimation = function() {
		options.animate.enabled = true;
		return this;
	};

	init();
};

$.fn.easyPieChart = function(options) {
	return this.each(function() {
		var instanceOptions;

		if (!$.data(this, 'easyPieChart')) {
			instanceOptions = $.extend({}, options, $(this).data());
			$.data(this, 'easyPieChart', new EasyPieChart(this, instanceOptions));
		}
	});
};

}));



/* 
* Lazy Line Painter 1.4.1
* SVG Stroke animation.
*
* https://github.com/camoconnell/lazy-line-painter
* http://www.camoconnell.com
*
* Copyright 2013 Cam O'Connell
* Licensed under the MIT license.
*  
*/ 

(function( $, window, undefined ){ 

	var dataKey = 'lazyLinePainter';

	var methods = {


		// setup lazy line data
		init : function( options ) { 

			return this.each(function(){

				var $this = $(this),
					d = $this.data( dataKey );

				$this.addClass('lazy-line');

				// If the plugin hasn't been initialized yet
				if ( ! d ) { 

					/*
						SETUP DATA
					*/

					// Collect settings, define defaults
					var o = $.extend( {
							'width'			: null,
							'height'		: null,
							'strokeWidth'	: 2,
							'strokeColor'	: '#000',
							'strokeCap'		: 'round',
							'strokeJoin'	: 'round',
							'strokeOpacity'	: 1,
							'strokeDash'	: null,
							'onComplete'	: null, 
							'delay'			: null,
							'overrideKey'	: null
						},  options);  

					// Set up path information
					// if overrideKey has been defined - use overrideKey as key within the svgData object.
					// else - use the elements id as key within the svgData object.
					var target = ( o.overrideKey === null ) ? $this.attr('id').replace('#','') : o.overrideKey;
					
					var	$w = o.svgData[target].dimensions.width, 
						$h = o.svgData[target].dimensions.height;

					o.svgData  = o.svgData[target].strokepath;

					// Setup dimensions
					if( o.width  === null ) o.width  = $w;
					if( o.height === null ) o.height = $h; 

					// Setup Rapheal 
					var $s = $this.attr("id"); // Requires Id
					var paper = new Raphael($s, $w, $h);
					
				 
					/*
						BIND DATA TO ELEMENT
					*/

					$this.data( dataKey , { 
						'svgData'		: o.svgData,
						'width'			: o.width,
						'height'		: o.height,
						'strokeWidth'	: o.strokeWidth,
						'strokeColor'	: o.strokeColor,
						'strokeCap'		: o.strokeCap,
						'strokeJoin'	: o.strokeJoin,
						'strokeOpacity'	: o.strokeOpacity,
						'strokeDash'	: o.strokeDash,
						'onComplete'	: o.onComplete, 
						'delay'             : o.delay,
						'overrideKey'       : o.overrideKey,
						'paper'             : paper,
						'count'             : 1,
						'complete'          : false,
						'playhead'          : 0,
						'setTimeOutHandler' : []
					}); 
				}
			});

		},


		/*
			PAINT LAZY LINE DATA
		*/
		paint : function( ) { 

			return this.each(function(){

				var $this = $(this),
				d = $this.data( dataKey );  

				var init = function(){

					// Set width / height of container element
					$this.css({'width' : d.width, 'height' : d.height});

					// Loop paths 
					$.each(d.svgData, function (i, val) {

						var p = d.paper.path(val.path);

						p.attr({ 
							"stroke" : "none",
							"stroke-width": d.strokeWidth,
							"fill-opacity": 0
						});

						var sto = setTimeout(function () {
							var s = draw({
								'count'	: d.count,
								'canvas'   : d.paper, 
								'pathstr'  : p, 
								'duration' : val.duration, 
								'attr'     : applyStyles( d, val ),
								'callback' : function (e) {  

									// remove reference to setTimeOut
									d.setTimeOutHandler.splice(d.count,1);

									d.count++; 

									if ((d.svgData.length+1) == d.count){
											d.complete = true;
											if(d.onComplete !== null) d.onComplete.call($this);
										}
									}
								});

						}, d.playhead);

						d.playhead += val.duration;

						// Keep track of setTimeOuts calls
						d.setTimeOutHandler.push(sto); 

					});
				};
 

				// if delay isset
				if(d.delay === null)
					init();
				else
					setTimeout(init, d.delay);
			});
		},


		/*
			ERASE LAZY LINE DATA
		*/
		erase : function( ) { 

			return this.each(function(){

				var $this = $(this);
				$this.find('svg').empty();
				d = $this.data( dataKey ); 

				// reset properties
				for (i = 0; i < d.setTimeOutHandler.length; i++) {
					clearTimeout( d.setTimeOutHandler[i] );
				}

				d.playhead = 0;
				d.count = 0;
				d.complete = false; 
			});
		},


		/*
			DESTROY LAZY LINE DATA & ELEMENT
		*/
		destroy : function( ) { 

			return this.each(function(){

				var $this = $(this),
				d = $this.data( dataKey ); 
				$this.removeData( dataKey ); 
				$this.remove();
			});
		},


		/*
			STAMP LAZY LINE DATA 
		*/
		stamp : function( ) { 

			return this.each(function(){

				var $this = $(this),
				d = $this.data( dataKey );  
				
				var init = function(){

					// Set width / height of container element
					$this.css({'width' : d.width, 'height' : d.height});

					// Loop paths 
					//$.each(d.svgData, function (i, val) {
					for (i = 0; i < d.svgData.length; i++) {
						d.paper.path( d.svgData[i].path ).attr( applyStyles( d, d.svgData[i] ) );
					}
					 
				};
				
				// if delay isset
				if(d.delay === null)
					init();
				else
					setTimeout(init, d.delay);
			}); 
		} 
	};



	var applyStyles = function( data, value ) {
 
		var styles = {
			"stroke"		: ( !value.strokeColor ) ? data.strokeColor : value.strokeColor,
			"fill-opacity"    : 0,
			"stroke-dasharray": ( !value.strokeDash )	? data.strokeDash : value.strokeDash,
			"stroke-opacity"  : ( !value.strokeOpacity )? data.strokeOpacity : value.strokeOpacity,
			"stroke-width"    : ( !value.strokeWidth )	? data.strokeWidth : value.strokeWidth,
			"stroke-linecap"  : ( !value.strokeCap )	? data.strokeCap : value.strokeCap,
			"stroke-linejoin" : ( !value.strokeJoin )	? data.strokeJoin : value.strokeJoin
		};

		return styles;
	};
	
 

	var draw = function( settings ) {

		var canvas   = settings.canvas, 
			pathstr  = settings.pathstr, 
			duration = settings.duration, 
			attr     = settings.attr, 
			callback = settings.callback;

		var guide_path;
		
		if ( typeof( pathstr ) == "string" )
			guide_path = canvas.path( pathstr ).attr( { stroke: "none", fill: "none" } );
		else
			guide_path = pathstr;

		var path = canvas.path( guide_path.getSubpath( 0, 1 ) ).attr( attr ),
			total_length = guide_path.getTotalLength( guide_path ),
			last_point = guide_path.getPointAtLength( 0 ),
			start_time = new Date().getTime(),
			interval_length = 25;        

		var interval_id = setInterval( function()
		{
			var elapsed_time = new Date().getTime() - start_time,
				this_length = elapsed_time / duration * total_length,
				subpathstr = guide_path.getSubpath( 0, this_length );  

			attr.path = subpathstr;

			path.animate( attr, interval_length );
			if ( elapsed_time >= duration )
			{
				clearInterval( interval_id );
				if ( callback !== undefined ) callback();
				guide_path.remove();
			}                                       
		}, interval_length );   
	};
	

	$.fn.lazylinepainter = function(method){ 

		if ( methods[method] ) { 

			return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));

		} else if ( typeof method === 'object' || ! method ) {

			return methods.init.apply( this, arguments );

		} else {
			 // error
		}  
	};

})( jQuery, window );


// The MIT License (MIT)

// Tyepd.js | Copyright (c) 2014 Matt Boldt | www.mattboldt.com

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.




!function($){

	"use strict";

	var Typed = function(el, options){

		// chosen element to manipulate text
		this.el = $(el);
		// options
		this.options = $.extend({}, $.fn.typed.defaults, options);

		// text content of element
		this.text = this.el.text();

		// typing speed
		this.typeSpeed = this.options.typeSpeed;
		
		// add a delay before typing starts
		this.startDelay = this.options.startDelay;

		// backspacing speed
		this.backSpeed = this.options.backSpeed;

		// amount of time to wait before backspacing
		this.backDelay = this.options.backDelay;

		// input strings of text
		this.strings = this.options.strings;

		// character number position of current string
		this.strPos = 0;

		// current array position
		this.arrayPos = 0;

		// current string based on current values[] array position
		this.string = this.strings[this.arrayPos];

		// number to stop backspacing on.
		// default 0, can change depending on how many chars
		// you want to remove at the time
		this.stopNum = 0;

		// Looping logic
		this.loop = this.options.loop;
		this.loopCount = this.options.loopCount;
		this.curLoop = 1;
		if (this.loop === false){
			// number in which to stop going through array
			// set to strings[] array (length - 1) to stop deleting after last string is typed
			this.stopArray = this.strings.length-1;
		}
		else{
			this.stopArray = this.strings.length;
		}

		// All systems go!
		this.build();
	}

		Typed.prototype =  {

			constructor: Typed

			, init: function(){
				// begin the loop w/ first current string (global self.string)
				// current string will be passed as an argument each time after this
				var self  = this;
			  	setTimeout(function() {
			  		// Start typing
					self.typewrite(self.string, self.strPos)
			  	}, self.startDelay);
			}

			, build: function(){
				// Insert cursor
				this.el.after("<span id=\"typed-cursor\">|</span>");
				this.init();
			}

			// pass current string state to each function
			, typewrite: function(curString, curStrPos){

				// varying values for setTimeout during typing
				// can't be global since number changes each time loop is executed
				var humanize = Math.round(Math.random() * (100 - 30)) + this.typeSpeed;
				var self = this;

				// ------------- optional ------------- //
				// backpaces a certain string faster
				// ------------------------------------ //
				// if (self.arrayPos == 1){
				// 	self.backDelay = 50;
				// }
				// else{ self.backDelay = 500; }

				// contain typing function in a timeout
				setTimeout(function() {

					// make sure array position is less than array length
					if (self.arrayPos < self.strings.length){
					
						// check for an escape character before a pause value
						if (curString.substr(curStrPos, 1) === "^") {
							var charPauseEnd = curString.substr(curStrPos + 1).indexOf(" ");
							var charPause = curString.substr(curStrPos + 1, charPauseEnd);
							// strip out the escape character and pause value so they're not printed
							curString = curString.replace("^" + charPause, "");
						}
						else {
							var charPause = 0;
						}
						
						// timeout for any pause after a character
						setTimeout(function() {

							// start typing each new char into existing string
							// curString is function arg
							self.el.text(self.text + curString.substr(0, curStrPos));

							// check if current character number is the string's length
							// and if the current array position is less than the stopping point
							// if so, backspace after backDelay setting
							if (curStrPos > curString.length && self.arrayPos < self.stopArray){
								clearTimeout(clear);
								var clear = setTimeout(function(){
									self.backspace(curString, curStrPos);
								}, self.backDelay);
							}

							// else, keep typing
							else{
								// add characters one by one
								curStrPos++;
								// loop the function
								self.typewrite(curString, curStrPos);
								// if the array position is at the stopping position
								// finish code, on to next task
								if (self.loop === false){
									if (self.arrayPos === self.stopArray && curStrPos === curString.length){
										// animation that occurs on the last typed string
										// fires callback function
										var clear = self.options.callback();
										clearTimeout(clear);
									}
								}
							}
							
						// end of character pause
						},charPause);
					}
					// if the array position is greater than array length
					// and looping is active, reset array pos and start over.
					else if (self.loop === true && self.loopCount === false){
						self.arrayPos = 0;
						self.init();
					}
						else if(self.loopCount !== false && self.curLoop < self.loopCount){
							self.arrayPos = 0;
							self.curLoop = self.curLoop+1;
							self.init();
						}

				// humanized value for typing
				}, humanize);

			}

			, backspace: function(curString, curStrPos){

				// varying values for setTimeout during typing
				// can't be global since number changes each time loop is executed
				var humanize = Math.round(Math.random() * (100 - 30)) + this.backSpeed;
				var self = this;

				setTimeout(function() {

					// ----- this part is optional ----- //
					// check string array position
					// on the first string, only delete one word
					// the stopNum actually represents the amount of chars to
					// keep in the current string. In my case it's 14.
					// if (self.arrayPos == 1){
					//	self.stopNum = 14;
					// }
					//every other time, delete the whole typed string
					// else{
					//	self.stopNum = 0;
					// }

					// ----- continue important stuff ----- //
					// replace text with current text + typed characters
					self.el.text(self.text + curString.substr(0, curStrPos));

					// if the number (id of character in current string) is
					// less than the stop number, keep going
					if (curStrPos > self.stopNum){
						// subtract characters one by one
						curStrPos--;
						// loop the function
						self.backspace(curString, curStrPos);
					}
					// if the stop number has been reached, increase
					// array position to next string
					else if (curStrPos <= self.stopNum){
						clearTimeout(clear);
						var clear = self.arrayPos = self.arrayPos+1;
						// must pass new array position in this instance
						// instead of using global arrayPos
						self.typewrite(self.strings[self.arrayPos], curStrPos);
					}

				// humanized value for typing
				}, humanize);

			}

		}

	$.fn.typed = function (option) {
	    return this.each(function () {
	      var $this = $(this)
	        , data = $this.data('typed')
	        , options = typeof option == 'object' && option
	      if (!data) $this.data('typed', (data = new Typed(this, options)))
	      if (typeof option == 'string') data[option]()
	    });
	}

	$.fn.typed.defaults = {
		strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
		// typing speed
		typeSpeed: 0,
		// time before typing starts
		startDelay: 0,
		// backspacing speed
		backSpeed: 0,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: false,
		// false = infinite
		loopCount: false,
		// ending callback function
		callback: function(){ null }
	}


}


(window.jQuery);
( function( window ) {

'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( classie );
} else {
  // browser global
  window.classie = classie;
}

})( window );


/**
 * jquery.hoverdir.js v1.1.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2012, Codrops
 * http://www.codrops.com
 */
;( function( $, window, undefined ) {
	
	'use strict';

	$.HoverDir = function( options, element ) {
		
		this.$el = $( element );
		this._init( options );

	};

	// the options
	$.HoverDir.defaults = {
		speed : 300,
		easing : 'ease',
		hoverDelay : 0,
		inverse : false
	};

	$.HoverDir.prototype = {

		_init : function( options ) {
			
			// options
			this.options = $.extend( true, {}, $.HoverDir.defaults, options );
			// transition properties
			this.transitionProp = 'all ' + this.options.speed + 'ms ' + this.options.easing;
			// support for CSS transitions
			this.support = Modernizr.csstransitions;
			// load the events
			this._loadEvents();

		},
		_loadEvents : function() {

			var self = this;
			
			this.$el.on( 'mouseenter.hoverdir, mouseleave.hoverdir', function( event ) {
				
				var $el = $( this ),
					$hoverElem = $el.find( 'div' ),
					direction = self._getDir( $el, { x : event.pageX, y : event.pageY } ),
					styleCSS = self._getStyle( direction );
				
				if( event.type === 'mouseenter' ) {
					
					$hoverElem.hide().css( styleCSS.from );
					clearTimeout( self.tmhover );

					self.tmhover = setTimeout( function() {
						
						$hoverElem.show( 0, function() {
							
							var $el = $( this );
							if( self.support ) {
								$el.css( 'transition', self.transitionProp );
							}
							self._applyAnimation( $el, styleCSS.to, self.options.speed );

						} );
						
					
					}, self.options.hoverDelay );
					
				}
				else {
				
					if( self.support ) {
						$hoverElem.css( 'transition', self.transitionProp );
					}
					clearTimeout( self.tmhover );
					self._applyAnimation( $hoverElem, styleCSS.from, self.options.speed );
					
				}
					
			} );

		},
		// credits : http://stackoverflow.com/a/3647634
		_getDir : function( $el, coordinates ) {
			
			// the width and height of the current div
			var w = $el.width(),
				h = $el.height(),

				// calculate the x and y to get an angle to the center of the div from that x and y.
				// gets the x value relative to the center of the DIV and "normalize" it
				x = ( coordinates.x - $el.offset().left - ( w/2 )) * ( w > h ? ( h/w ) : 1 ),
				y = ( coordinates.y - $el.offset().top  - ( h/2 )) * ( h > w ? ( w/h ) : 1 ),
			
				// the angle and the direction from where the mouse came in/went out clockwise (TRBL=0123);
				// first calculate the angle of the point,
				// add 180 deg to get rid of the negative values
				// divide by 90 to get the quadrant
				// add 3 and do a modulo by 4  to shift the quadrants to a proper clockwise TRBL (top/right/bottom/left) **/
				direction = Math.round( ( ( ( Math.atan2(y, x) * (180 / Math.PI) ) + 180 ) / 90 ) + 3 ) % 4;
			
			return direction;
			
		},
		_getStyle : function( direction ) {
			
			var fromStyle, toStyle,
				slideFromTop = { left : '0px', top : '-100%' },
				slideFromBottom = { left : '0px', top : '100%' },
				slideFromLeft = { left : '-100%', top : '0px' },
				slideFromRight = { left : '100%', top : '0px' },
				slideTop = { top : '0px' },
				slideLeft = { left : '0px' };
			
			switch( direction ) {
				case 0:
					// from top
					fromStyle = !this.options.inverse ? slideFromTop : slideFromBottom;
					toStyle = slideTop;
					break;
				case 1:
					// from right
					fromStyle = !this.options.inverse ? slideFromRight : slideFromLeft;
					toStyle = slideLeft;
					break;
				case 2:
					// from bottom
					fromStyle = !this.options.inverse ? slideFromBottom : slideFromTop;
					toStyle = slideTop;
					break;
				case 3:
					// from left
					fromStyle = !this.options.inverse ? slideFromLeft : slideFromRight;
					toStyle = slideLeft;
					break;
			};
			
			return { from : fromStyle, to : toStyle };
					
		},
		// apply a transition or fallback to jquery animate based on Modernizr.csstransitions support
		_applyAnimation : function( el, styleCSS, speed ) {

			$.fn.applyStyle = this.support ? $.fn.css : $.fn.animate;
			el.stop().applyStyle( styleCSS, $.extend( true, [], { duration : speed + 'ms' } ) );

		},

	};
	
	var logError = function( message ) {

		if ( window.console ) {

			window.console.error( message );
		
		}

	};
	
	$.fn.hoverdir = function( options ) {

		var instance = $.data( this, 'hoverdir' );
		
		if ( typeof options === 'string' ) {
			
			var args = Array.prototype.slice.call( arguments, 1 );
			
			this.each(function() {
			
				if ( !instance ) {

					logError( "cannot call methods on hoverdir prior to initialization; " +
					"attempted to call method '" + options + "'" );
					return;
				
				}
				
				if ( !$.isFunction( instance[options] ) || options.charAt(0) === "_" ) {

					logError( "no such method '" + options + "' for hoverdir instance" );
					return;
				
				}
				
				instance[ options ].apply( instance, args );
			
			});
		
		} 
		else {
		
			this.each(function() {
				
				if ( instance ) {

					instance._init();
				
				}
				else {

					instance = $.data( this, 'hoverdir', new $.HoverDir( options, this ) );
				
				}

			});
		
		}
		
		return instance;
		
	};
	
} )( jQuery, window );

/**
 * modalEffects.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
var ModalEffects = (function() {

	function init() {

		var overlay = document.querySelector( '.md-overlay' );

		[].slice.call( document.querySelectorAll( '.md-trigger' ) ).forEach( function( el, i ) {

			var modal = document.querySelector( '#' + el.getAttribute( 'data-modal' ) ),
				close = modal.querySelector( '.md-close' );

			function removeModal( hasPerspective ) {
				classie.remove( modal, 'md-show' );

				if( hasPerspective ) {
					classie.remove( document.documentElement, 'md-perspective' );
				}
			}

			function removeModalHandler() {
				removeModal( classie.has( el, 'md-setperspective' ) ); 
			}

			el.addEventListener( 'click', function( ev ) {
				classie.add( modal, 'md-show' );
				overlay.removeEventListener( 'click', removeModalHandler );
				overlay.addEventListener( 'click', removeModalHandler );

				if( classie.has( el, 'md-setperspective' ) ) {
					setTimeout( function() {
						classie.add( document.documentElement, 'md-perspective' );
					}, 25 );
				}
			});

			close.addEventListener( 'click', function( ev ) {
				ev.stopPropagation();
				removeModalHandler();
			});

		} );

	}

	init();

})();

/*!
 * classie - class helper functions
z */

( function( window ) {

'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};


if ( typeof define === 'function' && define.amd ) {
 
  define( classie );
} else {
 
  window.classie = classie;
}

})( window );

