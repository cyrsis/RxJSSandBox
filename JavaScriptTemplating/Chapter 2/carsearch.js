var carSearchModule = (function () {

	var models = ["Alpha", "Beta", "Gamma", "Delta", "Epsilon"];
	var trims = ["XT", "XTE", "Super", "Ultimate"];
	var colors = ["Red", "Blue", "Silver", "Gold", "Black", "White"];
	var features = ["Air Conditioning", "Cruise Control", "Backup Camera", "Power Steering", "Internet", "Sat Radio", "4WD", "Moon Roof"];

	var inventory = [
  {
    "model": "Alpha",
    "trim": "XT",
    "color": "White",
    "price": 40005,
    "features": [
      "Cruise Control",
      "Backup Camera",
      "Moon Roof"
    ]
  },
  {
    "model": "Alpha",
    "trim": "XT",
    "color": "Gold",
    "price": 46713,
    "features": [
      "Cruise Control",
      "Backup Camera",
      "Internet",
      "4WD"
    ]
  },
  {
    "model": "Alpha",
    "trim": "XT",
    "color": "White",
    "price": 41584,
    "features": [
      "Power Steering",
      "4WD"
    ]
  },
  {
    "model": "Alpha",
    "trim": "XT",
    "color": "Red",
    "price": 35805,
    "features": [
      "Cruise Control",
      "Power Steering",
      "Moon Roof"
    ]
  },
  {
    "model": "Alpha",
    "trim": "XT",
    "color": "White",
    "price": 43091,
    "features": [
      "Air Conditioning",
      "Backup Camera",
      "Internet"
    ]
  },
  {
    "model": "Alpha",
    "trim": "XT",
    "color": "Black",
    "price": 45988,
    "features": [
      "Air Conditioning",
      "Cruise Control",
      "4WD",
      "Moon Roof"
    ]
  },
  {
    "model": "Alpha",
    "trim": "XT",
    "color": "Red",
    "price": 51090,
    "features": [
      "Cruise Control",
      "Backup Camera",
      "Power Steering",
      "Sat Radio",
      "4WD"
    ]
  },
  {
    "model": "Alpha",
    "trim": "XT",
    "color": "Red",
    "price": 42501,
    "features": [
      "Air Conditioning",
      "Power Steering",
      "Sat Radio",
      "4WD"
    ]
  },
  {
    "model": "Alpha",
    "trim": "XT",
    "color": "Red",
    "price": 26321,
    "features": [
      "Backup Camera",
      "Moon Roof"
    ]
  },
  {
    "model": "Alpha",
    "trim": "XT",
    "color": "Black",
    "price": 25882,
    "features": [
      "Cruise Control",
      "Moon Roof"
    ]
  },
  {
    "model": "Alpha",
    "trim": "XT",
    "color": "Silver",
    "price": 47126,
    "features": [
      "Air Conditioning",
      "Cruise Control",
      "Backup Camera",
      "4WD",
      "Moon Roof"
    ]
  },
  {
    "model": "Alpha",
    "trim": "XT",
    "color": "Silver",
    "price": 49901,
    "features": [
      "Air Conditioning",
      "Power Steering",
      "Sat Radio",
      "4WD"
    ]
  },
  {
    "model": "Alpha",
    "trim": "XT",
    "color": "Black",
    "price": 27422,
    "features": [
      "4WD"
    ]
  },
  {
    "model": "Alpha",
    "trim": "XT",
    "color": "Silver",
    "price": 38755,
    "features": [
      "Air Conditioning",
      "Power Steering",
      "Internet",
      "Sat Radio"
    ]
  },
  {
    "model": "Alpha",
    "trim": "XT",
    "color": "White",
    "price": 48594,
    "features": [
      "Air Conditioning",
      "Cruise Control",
      "Power Steering",
      "Sat Radio"
    ]
  },
  {
    "model": "Alpha",
    "trim": "XT",
    "color": "Gold",
    "price": 40726,
    "features": [
      "Air Conditioning",
      "Cruise Control",
      "Sat Radio",
      "4WD",
      "Moon Roof"
    ]
  },
  {
    "model": "Alpha",
    "trim": "XTE",
    "color": "White",
    "price": 57176,
    "features": [
      "Cruise Control",
      "Internet",
      "4WD"
    ]
  },
  {
    "model": "Alpha",
    "trim": "XTE",
    "color": "Blue",
    "price": 58015,
    "features": [
      "Air Conditioning",
      "Cruise Control",
      "Backup Camera",
      "Internet",
      "4WD"
    ]
  },
  {
    "model": "Alpha",
    "trim": "XTE",
    "color": "White",
    "price": 50858,
    "features": [
      "Air Conditioning",
      "Cruise Control",
      "4WD",
      "Moon Roof"
    ]
  },
  {
    "model": "Alpha",
    "trim": "XTE",
    "color": "Silver",
    "price": 46843,
    "features": [
      "Air Conditioning",
      "Power Steering",
      "Sat Radio",
      "Moon Roof"
    ]
  },
  {
    "model": "Alpha",
    "trim": "XTE",
    "color": "Silver",
    "price": 53743,
    "features": [
      "Power Steering",
      "Internet",
      "4WD",
      "Moon Roof"
    ]
  },
  {
    "model": "Alpha",
    "trim": "XTE",
    "color": "Red",
    "price": 51507,
    "features": [
      "Cruise Control",
      "Backup Camera",
      "Power Steering",
      "Sat Radio"
    ]
  },
  {
    "model": "Alpha",
    "trim": "XTE",
    "color": "Blue",
    "price": 45206,
    "features": [
      "Cruise Control",
      "Internet",
      "4WD"
    ]
  },
  {
    "model": "Alpha",
    "trim": "XTE",
    "color": "Blue",
    "price": 47352,
    "features": [
      "Cruise Control",
      "Backup Camera",
      "Internet",
      "4WD"
    ]
  },
  {
    "model": "Alpha",
    "trim": "XTE",
    "color": "Black",
    "price": 58603,
    "features": [
      "Air Conditioning",
      "Cruise Control",
      "Internet",
      "Sat Radio"
    ]
  },
  {
    "model": "Alpha",
    "trim": "XTE",
    "color": "Gold",
    "price": 72159,
    "features": [
      "Air Conditioning",
      "Cruise Control",
      "Backup Camera",
      "Internet",
      "4WD",
      "Moon Roof"
    ]
  },
  {
    "model": "Alpha",
    "trim": "XTE",
    "color": "White",
    "price": 46522,
    "features": [
      "Power Steering",
      "Internet",
      "Moon Roof"
    ]
  },
  {
    "model": "Alpha",
    "trim": "XTE",
    "color": "White",
    "price": 58377,
    "features": [
      "Cruise Control",
      "Backup Camera",
      "Power Steering",
      "Internet"
    ]
  },
  {
    "model": "Alpha",
    "trim": "XTE",
    "color": "Black",
    "price": 65902,
    "features": [
      "Air Conditioning",
      "Cruise Control",
      "Backup Camera",
      "Power Steering",
      "Sat Radio",
      "4WD"
    ]
  },
  {
    "model": "Alpha",
    "trim": "XTE",
    "color": "Silver",
    "price": 62605,
    "features": [
      "Cruise Control",
      "Internet",
      "Sat Radio",
      "4WD"
    ]
  },
  {
    "model": "Alpha",
    "trim": "XTE",
    "color": "White",
    "price": 48457,
    "features": []
  },
  {
    "model": "Alpha",
    "trim": "XTE",
    "color": "Silver",
    "price": 51709,
    "features": [
      "Air Conditioning",
      "Backup Camera",
      "Sat Radio",
      "4WD",
      "Moon Roof"
    ]
  },
  {
    "model": "Alpha",
    "trim": "XTE",
    "color": "Silver",
    "price": 51960,
    "features": [
      "Internet",
      "4WD"
    ]
  },
  {
    "model": "Alpha",
    "trim": "XTE",
    "color": "Red",
    "price": 72057,
    "features": [
      "Air Conditioning",
      "Cruise Control",
      "Backup Camera",
      "Power Steering",
      "Internet",
      "4WD",
      "Moon Roof"
    ]
  },
  {
    "model": "Alpha",
    "trim": "Super",
    "color": "White",
    "price": 77264,
    "features": [
      "Air Conditioning",
      "Cruise Control",
      "Backup Camera",
      "Power Steering",
      "Sat Radio",
      "4WD",
      "Moon Roof"
    ]
  },
  {
    "model": "Alpha",
    "trim": "Super",
    "color": "Red",
    "price": 57562,
    "features": [
      "Power Steering",
      "Internet",
      "Sat Radio",
      "4WD"
    ]
  },
  {
    "model": "Alpha",
    "trim": "Super",
    "color": "Black",
    "price": 90759,
    "features": [
      "Cruise Control",
      "Backup Camera",
      "Power Steering",
      "Internet",
      "Sat Radio",
      "4WD",
      "Moon Roof"
    ]
  },
  {
    "model": "Alpha",
    "trim": "Super",
    "color": "Black",
    "price": 67242,
    "features": [
      "Cruise Control",
      "Backup Camera",
      "Internet",
      "Sat Radio",
      "4WD",
      "Moon Roof"
    ]
  },
  {
    "model": "Alpha",
    "trim": "Super",
    "color": "White",
    "price": 68484,
    "features": [
      "Air Conditioning",
      "Backup Camera",
      "Power Steering",
      "Internet"
    ]
  },
  {
    "model": "Alpha",
    "trim": "Super",
    "color": "Red",
    "price": 100520,
    "features": [
      "Air Conditioning",
      "Cruise Control",
      "Backup Camera",
      "Power Steering",
      "Internet",
      "Sat Radio",
      "4WD",
      "Moon Roof"
    ]
  },
  {
    "model": "Alpha",
    "trim": "Super",
    "color": "Red",
    "price": 53252,
    "features": [
      "Cruise Control",
      "Power Steering",
      "4WD"
    ]
  },
  {
    "model": "Alpha",
    "trim": "Super",
    "color": "Silver",
    "price": 53517,
    "features": [
      "Backup Camera",
      "Power Steering"
    ]
  },
  {
    "model": "Alpha",
    "trim": "Super",
    "color": "Black",
    "price": 81098,
    "features": [
      "Air Conditioning",
      "Cruise Control",
      "Backup Camera",
      "Internet",
      "Sat Radio",
      "4WD",
      "Moon Roof"
    ]
  },
  {
    "model": "Alpha",
    "trim": "Super",
    "color": "White",
    "price": 76513,
    "features": [
      "Cruise Control",
      "Backup Camera",
      "Power Steering",
      "Internet",
      "Sat Radio",
      "Moon Roof"
    ]
  },
  {
    "model": "Alpha",
    "trim": "Super",
    "color": "Gold",
    "price": 69071,
    "features": [
      "Air Conditioning",
      "Cruise Control",
      "Power Steering",
      "Internet",
      "Sat Radio"
    ]
  },
  {
    "model": "Alpha",
    "trim": "Ultimate",
    "color": "White",
    "price": 101824,
    "features": [
      "Air Conditioning",
      "Cruise Control",
      "Power Steering",
      "Internet",
      "Sat Radio",
      "4WD",
      "Moon Roof"
    ]
  },
  {
    "model": "Alpha",
    "trim": "Ultimate",
    "color": "Silver",
    "price": 94235,
    "features": [
      "Air Conditioning",
      "Cruise Control",
      "Backup Camera",
      "Internet",
      "Sat Radio",
      "4WD"
    ]
  },
  {
    "model": "Alpha",
    "trim": "Ultimate",
    "color": "White",
    "price": 109466,
    "features": [
      "Air Conditioning",
      "Cruise Control",
      "Backup Camera",
      "Power Steering",
      "Internet",
      "Sat Radio",
      "4WD",
      "Moon Roof"
    ]
  },
  {
    "model": "Alpha",
    "trim": "Ultimate",
    "color": "Red",
    "price": 90489,
    "features": [
      "Cruise Control",
      "Backup Camera",
      "Internet",
      "Sat Radio",
      "4WD",
      "Moon Roof"
    ]
  },
  {
    "model": "Alpha",
    "trim": "Ultimate",
    "color": "Silver",
    "price": 69944,
    "features": [
      "Backup Camera",
      "Internet",
      "Sat Radio",
      "4WD"
    ]
  },
  {
    "model": "Alpha",
    "trim": "Ultimate",
    "color": "Gold",
    "price": 93659,
    "features": [
      "Cruise Control",
      "Power Steering",
      "Internet",
      "Sat Radio",
      "4WD",
      "Moon Roof"
    ]
  },
  {
    "model": "Alpha",
    "trim": "Ultimate",
    "color": "Red",
    "price": 83911,
    "features": [
      "Backup Camera",
      "Power Steering",
      "Sat Radio",
      "Moon Roof"
    ]
  },
  {
    "model": "Alpha",
    "trim": "Ultimate",
    "color": "Red",
    "price": 95342,
    "features": [
      "Air Conditioning",
      "Cruise Control",
      "Backup Camera",
      "Power Steering",
      "Sat Radio",
      "4WD",
      "Moon Roof"
    ]
  },
  {
    "model": "Alpha",
    "trim": "Ultimate",
    "color": "Silver",
    "price": 91837,
    "features": [
      "Air Conditioning",
      "Cruise Control",
      "Backup Camera",
      "Internet",
      "4WD",
      "Moon Roof"
    ]
  },
  {
    "model": "Alpha",
    "trim": "Ultimate",
    "color": "Gold",
    "price": 90508,
    "features": [
      "Air Conditioning",
      "Cruise Control",
      "Backup Camera",
      "Power Steering",
      "Internet",
      "4WD",
      "Moon Roof"
    ]
  },
  {
    "model": "Beta",
    "trim": "XT",
    "color": "White",
    "price": 46041,
    "features": [
      "Air Conditioning",
      "Backup Camera",
      "Moon Roof"
    ]
  },
  {
    "model": "Beta",
    "trim": "XT",
    "color": "Gold",
    "price": 37161,
    "features": [
      "Cruise Control",
      "Power Steering"
    ]
  },
  {
    "model": "Beta",
    "trim": "XT",
    "color": "Gold",
    "price": 31051,
    "features": [
      "Cruise Control",
      "4WD"
    ]
  },
  {
    "model": "Beta",
    "trim": "XT",
    "color": "Red",
    "price": 40955,
    "features": [
      "Cruise Control",
      "Backup Camera",
      "Power Steering",
      "Moon Roof"
    ]
  },
  {
    "model": "Beta",
    "trim": "XT",
    "color": "Silver",
    "price": 43132,
    "features": [
      "Power Steering",
      "Sat Radio"
    ]
  },
  {
    "model": "Beta",
    "trim": "XT",
    "color": "Red",
    "price": 29770,
    "features": [
      "Backup Camera"
    ]
  },
  {
    "model": "Beta",
    "trim": "XT",
    "color": "Red",
    "price": 34726,
    "features": [
      "Power Steering",
      "Sat Radio",
      "Moon Roof"
    ]
  },
  {
    "model": "Beta",
    "trim": "XT",
    "color": "Black",
    "price": 41360,
    "features": [
      "Cruise Control",
      "Internet",
      "4WD"
    ]
  },
  {
    "model": "Beta",
    "trim": "XT",
    "color": "Gold",
    "price": 51939,
    "features": [
      "Backup Camera",
      "Power Steering",
      "Internet",
      "Moon Roof"
    ]
  },
  {
    "model": "Beta",
    "trim": "XT",
    "color": "Gold",
    "price": 34912,
    "features": [
      "Air Conditioning",
      "Internet",
      "4WD",
      "Moon Roof"
    ]
  },
  {
    "model": "Beta",
    "trim": "XT",
    "color": "Gold",
    "price": 41416,
    "features": [
      "Backup Camera",
      "Internet",
      "4WD"
    ]
  },
  {
    "model": "Beta",
    "trim": "XT",
    "color": "Black",
    "price": 31961,
    "features": [
      "Backup Camera",
      "Internet",
      "Moon Roof"
    ]
  },
  {
    "model": "Beta",
    "trim": "XT",
    "color": "White",
    "price": 35690,
    "features": [
      "Internet",
      "Sat Radio"
    ]
  },
  {
    "model": "Beta",
    "trim": "XT",
    "color": "Blue",
    "price": 41673,
    "features": [
      "Power Steering",
      "Sat Radio",
      "4WD"
    ]
  },
  {
    "model": "Beta",
    "trim": "XT",
    "color": "Silver",
    "price": 45112,
    "features": [
      "Cruise Control",
      "Internet",
      "4WD"
    ]
  },
  {
    "model": "Beta",
    "trim": "XT",
    "color": "Black",
    "price": 31435,
    "features": [
      "Internet"
    ]
  },
  {
    "model": "Beta",
    "trim": "XT",
    "color": "Red",
    "price": 44509,
    "features": [
      "Air Conditioning",
      "Cruise Control",
      "Power Steering",
      "Sat Radio",
      "4WD"
    ]
  },
  {
    "model": "Beta",
    "trim": "XT",
    "color": "Silver",
    "price": 23435,
    "features": [
      "Air Conditioning"
    ]
  },
  {
    "model": "Beta",
    "trim": "XT",
    "color": "Black",
    "price": 41673,
    "features": [
      "Air Conditioning",
      "Cruise Control",
      "Power Steering"
    ]
  },
  {
    "model": "Beta",
    "trim": "XTE",
    "color": "Gold",
    "price": 39221,
    "features": [
      "Backup Camera"
    ]
  },
  {
    "model": "Beta",
    "trim": "XTE",
    "color": "Gold",
    "price": 46535,
    "features": [
      "Power Steering",
      "Internet",
      "4WD",
      "Moon Roof"
    ]
  },
  {
    "model": "Beta",
    "trim": "XTE",
    "color": "Gold",
    "price": 51021,
    "features": [
      "Backup Camera"
    ]
  },
  {
    "model": "Beta",
    "trim": "XTE",
    "color": "Gold",
    "price": 50317,
    "features": [
      "Air Conditioning",
      "Cruise Control",
      "Backup Camera",
      "Internet",
      "4WD"
    ]
  },
  {
    "model": "Beta",
    "trim": "XTE",
    "color": "Red",
    "price": 61750,
    "features": [
      "Air Conditioning",
      "Power Steering",
      "Internet",
      "Sat Radio",
      "4WD",
      "Moon Roof"
    ]
  },
  {
    "model": "Beta",
    "trim": "XTE",
    "color": "Red",
    "price": 43245,
    "features": [
      "4WD"
    ]
  },
  {
    "model": "Beta",
    "trim": "XTE",
    "color": "White",
    "price": 61380,
    "features": [
      "Cruise Control",
      "Backup Camera",
      "Internet",
      "Sat Radio",
      "4WD"
    ]
  },
  {
    "model": "Beta",
    "trim": "XTE",
    "color": "Black",
    "price": 47221,
    "features": [
      "Air Conditioning",
      "Backup Camera",
      "Power Steering"
    ]
  },
  {
    "model": "Beta",
    "trim": "XTE",
    "color": "White",
    "price": 66036,
    "features": [
      "Air Conditioning",
      "Cruise Control",
      "Backup Camera",
      "Internet",
      "Moon Roof"
    ]
  },
  {
    "model": "Beta",
    "trim": "XTE",
    "color": "Red",
    "price": 69175,
    "features": [
      "Cruise Control",
      "Power Steering",
      "Sat Radio",
      "4WD",
      "Moon Roof"
    ]
  },
  {
    "model": "Beta",
    "trim": "Super",
    "color": "Gold",
    "price": 77832,
    "features": [
      "Cruise Control",
      "Power Steering",
      "Internet",
      "Sat Radio",
      "Moon Roof"
    ]
  },
  {
    "model": "Beta",
    "trim": "Super",
    "color": "Gold",
    "price": 85935,
    "features": [
      "Air Conditioning",
      "Cruise Control",
      "Backup Camera",
      "Power Steering",
      "Sat Radio",
      "4WD"
    ]
  },
  {
    "model": "Beta",
    "trim": "Super",
    "color": "White",
    "price": 54910,
    "features": [
      "Cruise Control",
      "Power Steering",
      "Sat Radio",
      "4WD"
    ]
  },
  {
    "model": "Beta",
    "trim": "Super",
    "color": "Gold",
    "price": 72522,
    "features": [
      "Air Conditioning",
      "Backup Camera",
      "Internet",
      "Sat Radio",
      "4WD",
      "Moon Roof"
    ]
  },
  {
    "model": "Beta",
    "trim": "Super",
    "color": "White",
    "price": 73289,
    "features": [
      "Air Conditioning",
      "Cruise Control",
      "Backup Camera",
      "Power Steering",
      "Internet",
      "Moon Roof"
    ]
  },
  {
    "model": "Beta",
    "trim": "Super",
    "color": "Black",
    "price": 67571,
    "features": [
      "Air Conditioning",
      "Power Steering",
      "Internet",
      "Sat Radio"
    ]
  },
  {
    "model": "Beta",
    "trim": "Super",
    "color": "White",
    "price": 62788,
    "features": [
      "Backup Camera",
      "Power Steering"
    ]
  },
  {
    "model": "Beta",
    "trim": "Super",
    "color": "Silver",
    "price": 61078,
    "features": [
      "Cruise Control",
      "Backup Camera",
      "Internet",
      "Sat Radio",
      "Moon Roof"
    ]
  },
  {
    "model": "Beta",
    "trim": "Super",
    "color": "Gold",
    "price": 79480,
    "features": [
      "Air Conditioning",
      "Backup Camera",
      "Internet",
      "Sat Radio",
      "Moon Roof"
    ]
  },
  {
    "model": "Beta",
    "trim": "Super",
    "color": "White",
    "price": 74544,
    "features": [
      "Cruise Control",
      "Power Steering",
      "Internet",
      "Sat Radio",
      "4WD",
      "Moon Roof"
    ]
  },
  {
    "model": "Beta",
    "trim": "Super",
    "color": "Red",
    "price": 49601,
    "features": [
      "Cruise Control",
      "4WD"
    ]
  },
  {
    "model": "Beta",
    "trim": "Ultimate",
    "color": "Gold",
    "price": 85534,
    "features": [
      "Air Conditioning",
      "Cruise Control",
      "Backup Camera",
      "Internet",
      "Sat Radio",
      "4WD"
    ]
  },
  {
    "model": "Beta",
    "trim": "Ultimate",
    "color": "Gold",
    "price": 77236,
    "features": [
      "Air Conditioning",
      "Power Steering",
      "Internet",
      "Sat Radio",
      "4WD"
    ]
  },
  {
    "model": "Beta",
    "trim": "Ultimate",
    "color": "Black",
    "price": 76542,
    "features": [
      "Cruise Control",
      "Power Steering",
      "Internet",
      "Sat Radio",
      "4WD"
    ]
  },
  {
    "model": "Beta",
    "trim": "Ultimate",
    "color": "Gold",
    "price": 92927,
    "features": [
      "Air Conditioning",
      "Cruise Control",
      "Backup Camera",
      "Power Steering",
      "Internet",
      "Sat Radio",
      "Moon Roof"
    ]
  },
  {
    "model": "Beta",
    "trim": "Ultimate",
    "color": "Black",
    "price": 88284,
    "features": [
      "Air Conditioning",
      "Backup Camera",
      "Internet",
      "4WD",
      "Moon Roof"
    ]
  },
  {
    "model": "Beta",
    "trim": "Ultimate",
    "color": "Black",
    "price": 65032,
    "features": [
      "Power Steering",
      "Internet",
      "4WD"
    ]
  },
  {
    "model": "Beta",
    "trim": "Ultimate",
    "color": "White",
    "price": 80868,
    "features": [
      "Cruise Control",
      "Power Steering",
      "Sat Radio",
      "Moon Roof"
    ]
  },
  {
    "model": "Beta",
    "trim": "Ultimate",
    "color": "Black",
    "price": 96842,
    "features": [
      "Air Conditioning",
      "Cruise Control",
      "Power Steering",
      "Sat Radio",
      "4WD",
      "Moon Roof"
    ]
  },
  {
    "model": "Beta",
    "trim": "Ultimate",
    "color": "Red",
    "price": 75579,
    "features": [
      "Backup Camera",
      "Internet",
      "4WD"
    ]
  },
  {
    "model": "Beta",
    "trim": "Ultimate",
    "color": "Red",
    "price": 79945,
    "features": [
      "Air Conditioning",
      "Cruise Control",
      "Internet",
      "Sat Radio",
      "4WD",
      "Moon Roof"
    ]
  },
  {
    "model": "Beta",
    "trim": "Ultimate",
    "color": "White",
    "price": 72220,
    "features": [
      "Air Conditioning",
      "Internet",
      "Sat Radio",
      "4WD",
      "Moon Roof"
    ]
  },
  {
    "model": "Beta",
    "trim": "Ultimate",
    "color": "Gold",
    "price": 77680,
    "features": [
      "Air Conditioning",
      "Cruise Control",
      "Backup Camera",
      "Power Steering",
      "Internet"
    ]
  },
  {
    "model": "Beta",
    "trim": "Ultimate",
    "color": "Gold",
    "price": 72462,
    "features": [
      "Cruise Control",
      "Backup Camera",
      "Power Steering",
      "Sat Radio",
      "Moon Roof"
    ]
  },
  {
    "model": "Beta",
    "trim": "Ultimate",
    "color": "Black",
    "price": 82220,
    "features": [
      "Air Conditioning",
      "Cruise Control",
      "Power Steering",
      "Sat Radio",
      "4WD",
      "Moon Roof"
    ]
  },
  {
    "model": "Beta",
    "trim": "Ultimate",
    "color": "Silver",
    "price": 89843,
    "features": [
      "Air Conditioning",
      "Backup Camera",
      "Power Steering",
      "Internet",
      "Sat Radio",
      "4WD",
      "Moon Roof"
    ]
  },
  {
    "model": "Beta",
    "trim": "Ultimate",
    "color": "Gold",
    "price": 103780,
    "features": [
      "Air Conditioning",
      "Cruise Control",
      "Backup Camera",
      "Power Steering",
      "Sat Radio",
      "4WD",
      "Moon Roof"
    ]
  },
  {
    "model": "Beta",
    "trim": "Ultimate",
    "color": "Silver",
    "price": 67313,
    "features": [
      "Cruise Control",
      "Power Steering",
      "Sat Radio",
      "4WD"
    ]
  },
  {
    "model": "Beta",
    "trim": "Ultimate",
    "color": "Black",
    "price": 68609,
    "features": [
      "Power Steering",
      "Internet",
      "Sat Radio",
      "4WD"
    ]
  },
  {
    "model": "Gamma",
    "trim": "XT",
    "color": "Silver",
    "price": 41244,
    "features": [
      "Cruise Control",
      "Backup Camera",
      "Sat Radio"
    ]
  },
  {
    "model": "Gamma",
    "trim": "XT",
    "color": "Blue",
    "price": 35032,
    "features": [
      "Internet",
      "4WD",
      "Moon Roof"
    ]
  },
  {
    "model": "Gamma",
    "trim": "XT",
    "color": "Black",
    "price": 34356,
    "features": [
      "Power Steering",
      "4WD",
      "Moon Roof"
    ]
  },
  {
    "model": "Gamma",
    "trim": "XT",
    "color": "Black",
    "price": 34733,
    "features": [
      "Air Conditioning",
      "Backup Camera",
      "Sat Radio",
      "4WD"
    ]
  },
  {
    "model": "Gamma",
    "trim": "XT",
    "color": "Red",
    "price": 25802,
    "features": [
      "Power Steering",
      "Moon Roof"
    ]
  },
  {
    "model": "Gamma",
    "trim": "XT",
    "color": "Silver",
    "price": 38612,
    "features": [
      "Air Conditioning",
      "Power Steering",
      "Internet",
      "Sat Radio"
    ]
  },
  {
    "model": "Gamma",
    "trim": "XT",
    "color": "Silver",
    "price": 56667,
    "features": [
      "Air Conditioning",
      "Cruise Control",
      "Power Steering",
      "Sat Radio",
      "4WD"
    ]
  },
  {
    "model": "Gamma",
    "trim": "XT",
    "color": "Gold",
    "price": 36279,
    "features": [
      "Cruise Control",
      "4WD",
      "Moon Roof"
    ]
  },
  {
    "model": "Gamma",
    "trim": "XT",
    "color": "Red",
    "price": 42538,
    "features": [
      "Power Steering",
      "Internet",
      "Sat Radio",
      "Moon Roof"
    ]
  },
  {
    "model": "Gamma",
    "trim": "XT",
    "color": "Gold",
    "price": 38934,
    "features": [
      "Air Conditioning",
      "Power Steering",
      "Sat Radio",
      "Moon Roof"
    ]
  },
  {
    "model": "Gamma",
    "trim": "XT",
    "color": "Blue",
    "price": 37565,
    "features": [
      "Backup Camera",
      "Power Steering"
    ]
  },
  {
    "model": "Gamma",
    "trim": "XT",
    "color": "Blue",
    "price": 38511,
    "features": [
      "Cruise Control",
      "Moon Roof"
    ]
  },
  {
    "model": "Gamma",
    "trim": "XT",
    "color": "Silver",
    "price": 45623,
    "features": [
      "Internet",
      "Sat Radio",
      "Moon Roof"
    ]
  },
  {
    "model": "Gamma",
    "trim": "XT",
    "color": "Black",
    "price": 41255,
    "features": [
      "Air Conditioning",
      "Backup Camera",
      "Internet",
      "4WD"
    ]
  },
  {
    "model": "Gamma",
    "trim": "XT",
    "color": "Silver",
    "price": 42373,
    "features": [
      "Air Conditioning",
      "Cruise Control",
      "Power Steering",
      "4WD",
      "Moon Roof"
    ]
  },
  {
    "model": "Gamma",
    "trim": "XT",
    "color": "White",
    "price": 42893,
    "features": [
      "Backup Camera",
      "Power Steering"
    ]
  },
  {
    "model": "Gamma",
    "trim": "XT",
    "color": "Gold",
    "price": 51328,
    "features": [
      "Air Conditioning",
      "Cruise Control",
      "Power Steering",
      "Moon Roof"
    ]
  },
  {
    "model": "Gamma",
    "trim": "XT",
    "color": "Blue",
    "price": 42815,
    "features": [
      "Backup Camera",
      "Sat Radio",
      "4WD"
    ]
  },
  {
    "model": "Gamma",
    "trim": "XT",
    "color": "Gold",
    "price": 33021,
    "features": [
      "Internet",
      "Sat Radio"
    ]
  },
  {
    "model": "Gamma",
    "trim": "XT",
    "color": "Blue",
    "price": 44213,
    "features": [
      "Cruise Control",
      "Sat Radio",
      "Moon Roof"
    ]
  },
  {
    "model": "Gamma",
    "trim": "XT",
    "color": "Gold",
    "price": 47132,
    "features": [
      "Air Conditioning",
      "Backup Camera",
      "Power Steering",
      "Moon Roof"
    ]
  },
  {
    "model": "Gamma",
    "trim": "XT",
    "color": "Red",
    "price": 55529,
    "features": [
      "Air Conditioning",
      "Cruise Control",
      "Power Steering",
      "Internet",
      "Sat Radio",
      "4WD",
      "Moon Roof"
    ]
  },
  {
    "model": "Gamma",
    "trim": "XT",
    "color": "Red",
    "price": 40447,
    "features": [
      "Power Steering",
      "Internet",
      "Sat Radio"
    ]
  },
  {
    "model": "Gamma",
    "trim": "XTE",
    "color": "Gold",
    "price": 52278,
    "features": [
      "Air Conditioning",
      "Backup Camera",
      "Moon Roof"
    ]
  },
  {
    "model": "Gamma",
    "trim": "XTE",
    "color": "Gold",
    "price": 48043,
    "features": [
      "Air Conditioning",
      "Power Steering",
      "Moon Roof"
    ]
  },
  {
    "model": "Gamma",
    "trim": "XTE",
    "color": "Blue",
    "price": 61257,
    "features": [
      "Cruise Control",
      "Backup Camera",
      "Power Steering",
      "Sat Radio",
      "Moon Roof"
    ]
  },
  {
    "model": "Gamma",
    "trim": "XTE",
    "color": "Gold",
    "price": 54209,
    "features": [
      "Air Conditioning",
      "Internet",
      "Moon Roof"
    ]
  },
  {
    "model": "Gamma",
    "trim": "XTE",
    "color": "Black",
    "price": 77054,
    "features": [
      "Air Conditioning",
      "Cruise Control",
      "Backup Camera",
      "Power Steering",
      "Internet",
      "Sat Radio",
      "4WD",
      "Moon Roof"
    ]
  },
  {
    "model": "Gamma",
    "trim": "XTE",
    "color": "Black",
    "price": 50379,
    "features": [
      "Cruise Control",
      "Power Steering",
      "Sat Radio"
    ]
  },
  {
    "model": "Gamma",
    "trim": "XTE",
    "color": "Black",
    "price": 54760,
    "features": [
      "Backup Camera",
      "Internet",
      "Sat Radio",
      "4WD",
      "Moon Roof"
    ]
  },
  {
    "model": "Gamma",
    "trim": "XTE",
    "color": "Silver",
    "price": 49183,
    "features": [
      "Backup Camera",
      "Internet",
      "Sat Radio",
      "4WD"
    ]
  },
  {
    "model": "Gamma",
    "trim": "XTE",
    "color": "Silver",
    "price": 55045,
    "features": [
      "Cruise Control",
      "Power Steering",
      "Sat Radio",
      "Moon Roof"
    ]
  },
  {
    "model": "Gamma",
    "trim": "XTE",
    "color": "Blue",
    "price": 40425,
    "features": [
      "Air Conditioning"
    ]
  },
  {
    "model": "Gamma",
    "trim": "Super",
    "color": "Black",
    "price": 64364,
    "features": [
      "Air Conditioning",
      "Backup Camera",
      "Power Steering",
      "4WD",
      "Moon Roof"
    ]
  },
  {
    "model": "Gamma",
    "trim": "Super",
    "color": "Silver",
    "price": 65975,
    "features": [
      "Cruise Control",
      "Internet",
      "Sat Radio",
      "4WD",
      "Moon Roof"
    ]
  },
  {
    "model": "Gamma",
    "trim": "Super",
    "color": "Red",
    "price": 56427,
    "features": [
      "Power Steering",
      "4WD"
    ]
  },
  {
    "model": "Gamma",
    "trim": "Super",
    "color": "Black",
    "price": 69223,
    "features": [
      "Cruise Control",
      "Backup Camera",
      "Internet",
      "4WD",
      "Moon Roof"
    ]
  },
  {
    "model": "Gamma",
    "trim": "Super",
    "color": "White",
    "price": 55352,
    "features": [
      "Air Conditioning",
      "Cruise Control",
      "Internet"
    ]
  },
  {
    "model": "Gamma",
    "trim": "Super",
    "color": "Black",
    "price": 80503,
    "features": [
      "Cruise Control",
      "Backup Camera",
      "Internet",
      "Sat Radio",
      "4WD",
      "Moon Roof"
    ]
  },
  {
    "model": "Gamma",
    "trim": "Super",
    "color": "Red",
    "price": 53827,
    "features": [
      "Air Conditioning",
      "Internet",
      "4WD"
    ]
  },
  {
    "model": "Gamma",
    "trim": "Super",
    "color": "Red",
    "price": 58576,
    "features": [
      "Cruise Control",
      "Backup Camera",
      "Power Steering",
      "4WD"
    ]
  },
  {
    "model": "Gamma",
    "trim": "Super",
    "color": "Gold",
    "price": 77517,
    "features": [
      "Air Conditioning",
      "Cruise Control",
      "Internet",
      "Sat Radio",
      "4WD",
      "Moon Roof"
    ]
  },
  {
    "model": "Gamma",
    "trim": "Super",
    "color": "Red",
    "price": 59494,
    "features": [
      "Air Conditioning",
      "Internet",
      "Sat Radio",
      "Moon Roof"
    ]
  },
  {
    "model": "Gamma",
    "trim": "Super",
    "color": "Gold",
    "price": 62134,
    "features": [
      "Air Conditioning",
      "Cruise Control",
      "Power Steering",
      "4WD",
      "Moon Roof"
    ]
  },
  {
    "model": "Gamma",
    "trim": "Super",
    "color": "Silver",
    "price": 62323,
    "features": [
      "Air Conditioning",
      "Backup Camera",
      "Power Steering",
      "Internet",
      "Sat Radio"
    ]
  },
  {
    "model": "Gamma",
    "trim": "Super",
    "color": "Red",
    "price": 79443,
    "features": [
      "Air Conditioning",
      "Cruise Control",
      "Power Steering",
      "Internet",
      "Sat Radio",
      "Moon Roof"
    ]
  },
  {
    "model": "Gamma",
    "trim": "Super",
    "color": "Red",
    "price": 85765,
    "features": [
      "Cruise Control",
      "Backup Camera",
      "Power Steering",
      "Internet",
      "4WD",
      "Moon Roof"
    ]
  },
  {
    "model": "Gamma",
    "trim": "Ultimate",
    "color": "Black",
    "price": 70106,
    "features": [
      "Cruise Control",
      "Backup Camera",
      "Power Steering"
    ]
  },
  {
    "model": "Gamma",
    "trim": "Ultimate",
    "color": "White",
    "price": 91973,
    "features": [
      "Air Conditioning",
      "Cruise Control",
      "Backup Camera",
      "Power Steering",
      "Internet",
      "4WD",
      "Moon Roof"
    ]
  },
  {
    "model": "Gamma",
    "trim": "Ultimate",
    "color": "Silver",
    "price": 78296,
    "features": [
      "Air Conditioning",
      "Cruise Control",
      "Backup Camera",
      "Power Steering",
      "Sat Radio"
    ]
  },
  {
    "model": "Gamma",
    "trim": "Ultimate",
    "color": "Black",
    "price": 89911,
    "features": [
      "Backup Camera",
      "Power Steering",
      "Internet",
      "4WD",
      "Moon Roof"
    ]
  },
  {
    "model": "Gamma",
    "trim": "Ultimate",
    "color": "Red",
    "price": 83504,
    "features": [
      "Air Conditioning",
      "Backup Camera",
      "Power Steering",
      "Sat Radio",
      "4WD",
      "Moon Roof"
    ]
  },
  {
    "model": "Gamma",
    "trim": "Ultimate",
    "color": "Black",
    "price": 80689,
    "features": [
      "Air Conditioning",
      "Power Steering",
      "Internet",
      "Sat Radio",
      "4WD"
    ]
  },
  {
    "model": "Gamma",
    "trim": "Ultimate",
    "color": "Silver",
    "price": 85851,
    "features": [
      "Air Conditioning",
      "Cruise Control",
      "Power Steering",
      "Internet",
      "Sat Radio",
      "4WD",
      "Moon Roof"
    ]
  },
  {
    "model": "Gamma",
    "trim": "Ultimate",
    "color": "Red",
    "price": 64676,
    "features": [
      "Cruise Control",
      "Power Steering",
      "4WD"
    ]
  },
  {
    "model": "Delta",
    "trim": "XT",
    "color": "Blue",
    "price": 49974,
    "features": [
      "Air Conditioning",
      "Backup Camera",
      "Power Steering",
      "Sat Radio"
    ]
  },
  {
    "model": "Delta",
    "trim": "XT",
    "color": "Silver",
    "price": 38768,
    "features": [
      "Air Conditioning",
      "Internet"
    ]
  },
  {
    "model": "Delta",
    "trim": "XT",
    "color": "Red",
    "price": 34442,
    "features": [
      "Cruise Control",
      "Internet"
    ]
  },
  {
    "model": "Delta",
    "trim": "XT",
    "color": "Blue",
    "price": 26224,
    "features": [
      "Backup Camera"
    ]
  },
  {
    "model": "Delta",
    "trim": "XT",
    "color": "Black",
    "price": 49118,
    "features": [
      "Power Steering",
      "Sat Radio",
      "4WD",
      "Moon Roof"
    ]
  },
  {
    "model": "Delta",
    "trim": "XT",
    "color": "White",
    "price": 43413,
    "features": [
      "Air Conditioning",
      "Power Steering",
      "Internet",
      "Sat Radio",
      "4WD"
    ]
  },
  {
    "model": "Delta",
    "trim": "XT",
    "color": "Silver",
    "price": 34367,
    "features": [
      "4WD",
      "Moon Roof"
    ]
  },
  {
    "model": "Delta",
    "trim": "XT",
    "color": "Blue",
    "price": 42342,
    "features": [
      "Air Conditioning",
      "Cruise Control",
      "Backup Camera",
      "Power Steering"
    ]
  },
  {
    "model": "Delta",
    "trim": "XT",
    "color": "Gold",
    "price": 30672,
    "features": [
      "Moon Roof"
    ]
  },
  {
    "model": "Delta",
    "trim": "XT",
    "color": "Black",
    "price": 30537,
    "features": [
      "Backup Camera",
      "Power Steering"
    ]
  },
  {
    "model": "Delta",
    "trim": "XT",
    "color": "Silver",
    "price": 49999,
    "features": [
      "Power Steering",
      "Internet",
      "Sat Radio",
      "Moon Roof"
    ]
  },
  {
    "model": "Delta",
    "trim": "XT",
    "color": "Black",
    "price": 38267,
    "features": [
      "Cruise Control",
      "Internet"
    ]
  },
  {
    "model": "Delta",
    "trim": "XT",
    "color": "Silver",
    "price": 43676,
    "features": [
      "Air Conditioning",
      "Cruise Control",
      "Backup Camera"
    ]
  },
  {
    "model": "Delta",
    "trim": "XT",
    "color": "Silver",
    "price": 60526,
    "features": [
      "Air Conditioning",
      "Cruise Control",
      "Power Steering",
      "Internet",
      "Sat Radio",
      "4WD",
      "Moon Roof"
    ]
  },
  {
    "model": "Delta",
    "trim": "XT",
    "color": "Red",
    "price": 50508,
    "features": [
      "Air Conditioning",
      "Cruise Control",
      "Backup Camera",
      "Internet",
      "Sat Radio"
    ]
  },
  {
    "model": "Delta",
    "trim": "XTE",
    "color": "Black",
    "price": 69030,
    "features": [
      "Air Conditioning",
      "Cruise Control",
      "Backup Camera",
      "Power Steering",
      "4WD"
    ]
  },
  {
    "model": "Delta",
    "trim": "XTE",
    "color": "Silver",
    "price": 60730,
    "features": [
      "Air Conditioning",
      "Power Steering",
      "Sat Radio",
      "4WD"
    ]
  },
  {
    "model": "Delta",
    "trim": "XTE",
    "color": "Gold",
    "price": 52877,
    "features": [
      "Air Conditioning",
      "4WD"
    ]
  },
  {
    "model": "Delta",
    "trim": "XTE",
    "color": "White",
    "price": 51112,
    "features": [
      "Cruise Control",
      "Backup Camera",
      "Power Steering",
      "Internet",
      "Moon Roof"
    ]
  },
  {
    "model": "Delta",
    "trim": "XTE",
    "color": "Black",
    "price": 66291,
    "features": [
      "Air Conditioning",
      "Cruise Control",
      "Internet",
      "Sat Radio",
      "4WD",
      "Moon Roof"
    ]
  },
  {
    "model": "Delta",
    "trim": "XTE",
    "color": "Red",
    "price": 55383,
    "features": [
      "Air Conditioning",
      "Cruise Control",
      "Power Steering",
      "Sat Radio"
    ]
  },
  {
    "model": "Delta",
    "trim": "XTE",
    "color": "Red",
    "price": 45799,
    "features": [
      "Backup Camera",
      "Power Steering",
      "4WD",
      "Moon Roof"
    ]
  },
  {
    "model": "Delta",
    "trim": "XTE",
    "color": "Gold",
    "price": 61619,
    "features": [
      "Cruise Control",
      "Backup Camera",
      "Power Steering",
      "Sat Radio",
      "Moon Roof"
    ]
  },
  {
    "model": "Delta",
    "trim": "XTE",
    "color": "Gold",
    "price": 54555,
    "features": [
      "Air Conditioning",
      "Power Steering",
      "Sat Radio",
      "4WD"
    ]
  },
  {
    "model": "Delta",
    "trim": "XTE",
    "color": "Gold",
    "price": 75980,
    "features": [
      "Cruise Control",
      "Backup Camera",
      "Power Steering",
      "Internet",
      "Sat Radio",
      "4WD",
      "Moon Roof"
    ]
  },
  {
    "model": "Delta",
    "trim": "XTE",
    "color": "Black",
    "price": 52379,
    "features": [
      "Cruise Control",
      "Backup Camera",
      "4WD",
      "Moon Roof"
    ]
  },
  {
    "model": "Delta",
    "trim": "XTE",
    "color": "Blue",
    "price": 68249,
    "features": [
      "Air Conditioning",
      "Cruise Control",
      "Backup Camera",
      "Power Steering",
      "Internet",
      "Sat Radio"
    ]
  },
  {
    "model": "Delta",
    "trim": "XTE",
    "color": "Red",
    "price": 68008,
    "features": [
      "Air Conditioning",
      "Power Steering",
      "Internet",
      "Sat Radio",
      "4WD",
      "Moon Roof"
    ]
  },
  {
    "model": "Delta",
    "trim": "XTE",
    "color": "Gold",
    "price": 52527,
    "features": [
      "Backup Camera",
      "Power Steering"
    ]
  },
  {
    "model": "Delta",
    "trim": "XTE",
    "color": "White",
    "price": 56238,
    "features": [
      "Air Conditioning",
      "Cruise Control",
      "Power Steering",
      "Internet",
      "Sat Radio"
    ]
  },
  {
    "model": "Delta",
    "trim": "XTE",
    "color": "Silver",
    "price": 54892,
    "features": [
      "Cruise Control",
      "Backup Camera",
      "Power Steering",
      "Sat Radio"
    ]
  },
  {
    "model": "Delta",
    "trim": "XTE",
    "color": "Blue",
    "price": 64829,
    "features": [
      "Backup Camera",
      "Power Steering",
      "Internet",
      "Sat Radio",
      "4WD"
    ]
  },
  {
    "model": "Delta",
    "trim": "XTE",
    "color": "Black",
    "price": 54510,
    "features": [
      "Air Conditioning",
      "Power Steering",
      "Sat Radio",
      "4WD"
    ]
  },
  {
    "model": "Delta",
    "trim": "XTE",
    "color": "Gold",
    "price": 48145,
    "features": [
      "Air Conditioning",
      "Backup Camera",
      "4WD",
      "Moon Roof"
    ]
  },
  {
    "model": "Delta",
    "trim": "XTE",
    "color": "Gold",
    "price": 63978,
    "features": [
      "Air Conditioning",
      "Power Steering",
      "Internet",
      "Sat Radio",
      "Moon Roof"
    ]
  },
  {
    "model": "Delta",
    "trim": "XTE",
    "color": "Red",
    "price": 41755,
    "features": [
      "Cruise Control",
      "4WD"
    ]
  },
  {
    "model": "Delta",
    "trim": "XTE",
    "color": "Blue",
    "price": 52549,
    "features": [
      "Backup Camera",
      "Power Steering",
      "Internet",
      "Sat Radio",
      "4WD"
    ]
  },
  {
    "model": "Delta",
    "trim": "Super",
    "color": "White",
    "price": 82842,
    "features": [
      "Air Conditioning",
      "Cruise Control",
      "Backup Camera",
      "Internet",
      "Sat Radio",
      "4WD",
      "Moon Roof"
    ]
  },
  {
    "model": "Delta",
    "trim": "Super",
    "color": "Gold",
    "price": 65125,
    "features": [
      "Air Conditioning",
      "Cruise Control",
      "Sat Radio",
      "4WD",
      "Moon Roof"
    ]
  },
  {
    "model": "Delta",
    "trim": "Super",
    "color": "Blue",
    "price": 67073,
    "features": [
      "Air Conditioning",
      "Power Steering",
      "Internet",
      "4WD"
    ]
  },
  {
    "model": "Delta",
    "trim": "Super",
    "color": "Black",
    "price": 67654,
    "features": [
      "Backup Camera",
      "Power Steering",
      "4WD",
      "Moon Roof"
    ]
  },
  {
    "model": "Delta",
    "trim": "Super",
    "color": "Red",
    "price": 72907,
    "features": [
      "Air Conditioning",
      "Internet",
      "Sat Radio",
      "Moon Roof"
    ]
  },
  {
    "model": "Delta",
    "trim": "Super",
    "color": "Black",
    "price": 73947,
    "features": [
      "Cruise Control",
      "Power Steering",
      "Internet",
      "Sat Radio",
      "4WD"
    ]
  },
  {
    "model": "Delta",
    "trim": "Super",
    "color": "Red",
    "price": 52101,
    "features": [
      "Air Conditioning",
      "Sat Radio",
      "4WD"
    ]
  },
  {
    "model": "Delta",
    "trim": "Super",
    "color": "Black",
    "price": 68613,
    "features": [
      "Air Conditioning",
      "Cruise Control",
      "Power Steering",
      "Sat Radio",
      "Moon Roof"
    ]
  },
  {
    "model": "Delta",
    "trim": "Super",
    "color": "Silver",
    "price": 70518,
    "features": [
      "Air Conditioning",
      "Cruise Control",
      "Backup Camera",
      "Power Steering",
      "Sat Radio",
      "4WD"
    ]
  },
  {
    "model": "Delta",
    "trim": "Super",
    "color": "White",
    "price": 75670,
    "features": [
      "Air Conditioning",
      "Cruise Control",
      "Backup Camera",
      "Power Steering",
      "Internet",
      "Sat Radio",
      "4WD"
    ]
  },
  {
    "model": "Delta",
    "trim": "Super",
    "color": "Gold",
    "price": 56432,
    "features": [
      "Cruise Control",
      "Power Steering",
      "Sat Radio",
      "4WD"
    ]
  },
  {
    "model": "Delta",
    "trim": "Super",
    "color": "Silver",
    "price": 54805,
    "features": [
      "Cruise Control",
      "Backup Camera",
      "Internet",
      "Moon Roof"
    ]
  },
  {
    "model": "Delta",
    "trim": "Super",
    "color": "Blue",
    "price": 63731,
    "features": [
      "Air Conditioning",
      "Cruise Control",
      "Sat Radio",
      "Moon Roof"
    ]
  },
  {
    "model": "Delta",
    "trim": "Super",
    "color": "Blue",
    "price": 55705,
    "features": [
      "Cruise Control",
      "Backup Camera",
      "4WD",
      "Moon Roof"
    ]
  },
  {
    "model": "Delta",
    "trim": "Super",
    "color": "Silver",
    "price": 60530,
    "features": [
      "Air Conditioning",
      "Backup Camera",
      "Internet",
      "Sat Radio",
      "Moon Roof"
    ]
  },
  {
    "model": "Delta",
    "trim": "Super",
    "color": "Red",
    "price": 94418,
    "features": [
      "Air Conditioning",
      "Cruise Control",
      "Backup Camera",
      "Power Steering",
      "Sat Radio",
      "4WD",
      "Moon Roof"
    ]
  },
  {
    "model": "Delta",
    "trim": "Super",
    "color": "Gold",
    "price": 78280,
    "features": [
      "Air Conditioning",
      "Cruise Control",
      "Power Steering",
      "Internet",
      "Sat Radio",
      "4WD",
      "Moon Roof"
    ]
  },
  {
    "model": "Delta",
    "trim": "Super",
    "color": "Red",
    "price": 85722,
    "features": [
      "Cruise Control",
      "Backup Camera",
      "Internet",
      "Sat Radio",
      "4WD",
      "Moon Roof"
    ]
  },
  {
    "model": "Delta",
    "trim": "Super",
    "color": "Red",
    "price": 74352,
    "features": [
      "Backup Camera",
      "Power Steering",
      "Internet",
      "Sat Radio",
      "4WD",
      "Moon Roof"
    ]
  },
  {
    "model": "Delta",
    "trim": "Super",
    "color": "Red",
    "price": 51914,
    "features": [
      "Cruise Control",
      "Power Steering",
      "Moon Roof"
    ]
  },
  {
    "model": "Delta",
    "trim": "Super",
    "color": "Blue",
    "price": 64886,
    "features": [
      "Air Conditioning",
      "Backup Camera",
      "Power Steering",
      "4WD",
      "Moon Roof"
    ]
  },
  {
    "model": "Delta",
    "trim": "Super",
    "color": "Gold",
    "price": 63900,
    "features": [
      "Power Steering",
      "Internet",
      "Sat Radio",
      "Moon Roof"
    ]
  },
  {
    "model": "Delta",
    "trim": "Super",
    "color": "Red",
    "price": 65041,
    "features": [
      "Air Conditioning",
      "Cruise Control",
      "Backup Camera",
      "Internet",
      "Moon Roof"
    ]
  },
  {
    "model": "Delta",
    "trim": "Ultimate",
    "color": "Silver",
    "price": 64024,
    "features": [
      "Air Conditioning",
      "Cruise Control",
      "Backup Camera",
      "Internet"
    ]
  },
  {
    "model": "Delta",
    "trim": "Ultimate",
    "color": "Blue",
    "price": 81570,
    "features": [
      "Backup Camera",
      "Power Steering",
      "Internet",
      "Moon Roof"
    ]
  },
  {
    "model": "Delta",
    "trim": "Ultimate",
    "color": "Blue",
    "price": 78950,
    "features": [
      "Air Conditioning",
      "Cruise Control",
      "Backup Camera",
      "Power Steering",
      "Internet",
      "Sat Radio"
    ]
  },
  {
    "model": "Delta",
    "trim": "Ultimate",
    "color": "Gold",
    "price": 110684,
    "features": [
      "Air Conditioning",
      "Cruise Control",
      "Backup Camera",
      "Power Steering",
      "Internet",
      "Sat Radio",
      "4WD",
      "Moon Roof"
    ]
  },
  {
    "model": "Delta",
    "trim": "Ultimate",
    "color": "Black",
    "price": 79011,
    "features": [
      "Air Conditioning",
      "Cruise Control",
      "Backup Camera",
      "Internet",
      "Sat Radio",
      "Moon Roof"
    ]
  },
  {
    "model": "Delta",
    "trim": "Ultimate",
    "color": "Black",
    "price": 72987,
    "features": [
      "Air Conditioning",
      "Cruise Control",
      "Power Steering",
      "Sat Radio"
    ]
  },
  {
    "model": "Delta",
    "trim": "Ultimate",
    "color": "Blue",
    "price": 69610,
    "features": [
      "Cruise Control",
      "Power Steering",
      "Sat Radio",
      "Moon Roof"
    ]
  },
  {
    "model": "Delta",
    "trim": "Ultimate",
    "color": "Red",
    "price": 81451,
    "features": [
      "Air Conditioning",
      "Power Steering",
      "Sat Radio",
      "4WD"
    ]
  },
  {
    "model": "Delta",
    "trim": "Ultimate",
    "color": "Black",
    "price": 92940,
    "features": [
      "Air Conditioning",
      "Cruise Control",
      "Backup Camera",
      "Internet",
      "Sat Radio",
      "4WD",
      "Moon Roof"
    ]
  },
  {
    "model": "Delta",
    "trim": "Ultimate",
    "color": "White",
    "price": 98046,
    "features": [
      "Air Conditioning",
      "Cruise Control",
      "Power Steering",
      "Internet",
      "Sat Radio",
      "4WD",
      "Moon Roof"
    ]
  },
  {
    "model": "Delta",
    "trim": "Ultimate",
    "color": "Blue",
    "price": 73506,
    "features": [
      "Air Conditioning",
      "Backup Camera",
      "Power Steering",
      "Sat Radio",
      "4WD"
    ]
  },
  {
    "model": "Delta",
    "trim": "Ultimate",
    "color": "Red",
    "price": 85976,
    "features": [
      "Backup Camera",
      "Internet",
      "Sat Radio",
      "4WD",
      "Moon Roof"
    ]
  },
  {
    "model": "Delta",
    "trim": "Ultimate",
    "color": "Silver",
    "price": 87226,
    "features": [
      "Air Conditioning",
      "Cruise Control",
      "Power Steering",
      "Internet",
      "Sat Radio",
      "4WD",
      "Moon Roof"
    ]
  },
  {
    "model": "Delta",
    "trim": "Ultimate",
    "color": "Gold",
    "price": 83643,
    "features": [
      "Air Conditioning",
      "Cruise Control",
      "Power Steering",
      "Internet",
      "Sat Radio",
      "4WD"
    ]
  },
  {
    "model": "Delta",
    "trim": "Ultimate",
    "color": "Gold",
    "price": 79566,
    "features": [
      "Cruise Control",
      "Backup Camera",
      "Sat Radio",
      "4WD",
      "Moon Roof"
    ]
  },
  {
    "model": "Epsilon",
    "trim": "XT",
    "color": "Black",
    "price": 50730,
    "features": [
      "Air Conditioning",
      "Cruise Control",
      "Internet",
      "4WD"
    ]
  },
  {
    "model": "Epsilon",
    "trim": "XT",
    "color": "Red",
    "price": 25984,
    "features": [
      "Power Steering",
      "4WD"
    ]
  },
  {
    "model": "Epsilon",
    "trim": "XT",
    "color": "Gold",
    "price": 42080,
    "features": [
      "Cruise Control",
      "4WD",
      "Moon Roof"
    ]
  },
  {
    "model": "Epsilon",
    "trim": "XT",
    "color": "Silver",
    "price": 44763,
    "features": [
      "Air Conditioning",
      "Backup Camera",
      "Power Steering",
      "Sat Radio",
      "4WD"
    ]
  },
  {
    "model": "Epsilon",
    "trim": "XT",
    "color": "Gold",
    "price": 28629,
    "features": [
      "Air Conditioning",
      "Sat Radio"
    ]
  },
  {
    "model": "Epsilon",
    "trim": "XT",
    "color": "Red",
    "price": 26042,
    "features": [
      "Power Steering",
      "Sat Radio"
    ]
  },
  {
    "model": "Epsilon",
    "trim": "XT",
    "color": "Red",
    "price": 31155,
    "features": []
  },
  {
    "model": "Epsilon",
    "trim": "XT",
    "color": "Blue",
    "price": 48768,
    "features": [
      "Cruise Control",
      "Backup Camera",
      "4WD"
    ]
  },
  {
    "model": "Epsilon",
    "trim": "XT",
    "color": "Blue",
    "price": 39365,
    "features": [
      "Backup Camera",
      "Power Steering",
      "Internet",
      "Sat Radio"
    ]
  },
  {
    "model": "Epsilon",
    "trim": "XTE",
    "color": "Gold",
    "price": 51784,
    "features": [
      "Backup Camera",
      "Power Steering",
      "Internet"
    ]
  },
  {
    "model": "Epsilon",
    "trim": "XTE",
    "color": "Silver",
    "price": 59085,
    "features": [
      "Air Conditioning",
      "Backup Camera",
      "Power Steering",
      "Sat Radio"
    ]
  },
  {
    "model": "Epsilon",
    "trim": "XTE",
    "color": "Silver",
    "price": 33169,
    "features": [
      "Sat Radio"
    ]
  },
  {
    "model": "Epsilon",
    "trim": "XTE",
    "color": "Gold",
    "price": 54978,
    "features": [
      "Air Conditioning",
      "Power Steering",
      "Sat Radio",
      "Moon Roof"
    ]
  },
  {
    "model": "Epsilon",
    "trim": "XTE",
    "color": "Silver",
    "price": 76626,
    "features": [
      "Air Conditioning",
      "Cruise Control",
      "Power Steering",
      "Sat Radio",
      "4WD",
      "Moon Roof"
    ]
  },
  {
    "model": "Epsilon",
    "trim": "XTE",
    "color": "Gold",
    "price": 60879,
    "features": [
      "Air Conditioning",
      "Cruise Control",
      "Backup Camera",
      "Internet",
      "Sat Radio",
      "4WD"
    ]
  },
  {
    "model": "Epsilon",
    "trim": "XTE",
    "color": "Silver",
    "price": 61791,
    "features": [
      "Cruise Control",
      "Backup Camera",
      "Sat Radio",
      "4WD"
    ]
  },
  {
    "model": "Epsilon",
    "trim": "XTE",
    "color": "Blue",
    "price": 65655,
    "features": [
      "Air Conditioning",
      "Cruise Control",
      "Backup Camera",
      "Power Steering",
      "Sat Radio",
      "4WD"
    ]
  },
  {
    "model": "Epsilon",
    "trim": "XTE",
    "color": "Blue",
    "price": 42477,
    "features": [
      "Backup Camera",
      "Sat Radio",
      "4WD"
    ]
  },
  {
    "model": "Epsilon",
    "trim": "XTE",
    "color": "Red",
    "price": 68217,
    "features": [
      "Air Conditioning",
      "Backup Camera",
      "Power Steering",
      "Internet",
      "4WD"
    ]
  },
  {
    "model": "Epsilon",
    "trim": "XTE",
    "color": "Black",
    "price": 44006,
    "features": [
      "Power Steering",
      "Internet"
    ]
  },
  {
    "model": "Epsilon",
    "trim": "XTE",
    "color": "Red",
    "price": 63991,
    "features": [
      "Air Conditioning",
      "Cruise Control",
      "Internet",
      "Sat Radio"
    ]
  },
  {
    "model": "Epsilon",
    "trim": "XTE",
    "color": "Gold",
    "price": 69008,
    "features": [
      "Air Conditioning",
      "Cruise Control",
      "Backup Camera",
      "Power Steering",
      "Sat Radio"
    ]
  },
  {
    "model": "Epsilon",
    "trim": "XTE",
    "color": "Blue",
    "price": 45370,
    "features": [
      "Air Conditioning",
      "Power Steering",
      "Internet",
      "Moon Roof"
    ]
  },
  {
    "model": "Epsilon",
    "trim": "Super",
    "color": "Red",
    "price": 66190,
    "features": [
      "Cruise Control",
      "Backup Camera",
      "Internet",
      "Sat Radio"
    ]
  },
  {
    "model": "Epsilon",
    "trim": "Super",
    "color": "Black",
    "price": 63681,
    "features": [
      "Air Conditioning",
      "Backup Camera",
      "Power Steering",
      "Internet",
      "Sat Radio"
    ]
  },
  {
    "model": "Epsilon",
    "trim": "Super",
    "color": "Blue",
    "price": 75220,
    "features": [
      "Air Conditioning",
      "Cruise Control",
      "Backup Camera",
      "Internet",
      "Sat Radio",
      "4WD",
      "Moon Roof"
    ]
  },
  {
    "model": "Epsilon",
    "trim": "Super",
    "color": "Gold",
    "price": 67680,
    "features": [
      "Cruise Control",
      "Backup Camera",
      "Power Steering",
      "Sat Radio",
      "4WD"
    ]
  },
  {
    "model": "Epsilon",
    "trim": "Super",
    "color": "Silver",
    "price": 66992,
    "features": [
      "Air Conditioning",
      "Cruise Control",
      "Power Steering",
      "Sat Radio",
      "Moon Roof"
    ]
  },
  {
    "model": "Epsilon",
    "trim": "Super",
    "color": "Gold",
    "price": 52268,
    "features": [
      "Backup Camera",
      "Internet",
      "Sat Radio"
    ]
  },
  {
    "model": "Epsilon",
    "trim": "Super",
    "color": "Gold",
    "price": 66428,
    "features": [
      "Air Conditioning",
      "Cruise Control",
      "Internet",
      "4WD"
    ]
  },
  {
    "model": "Epsilon",
    "trim": "Super",
    "color": "White",
    "price": 72302,
    "features": [
      "Air Conditioning",
      "Power Steering",
      "Internet",
      "Sat Radio",
      "Moon Roof"
    ]
  },
  {
    "model": "Epsilon",
    "trim": "Super",
    "color": "Red",
    "price": 59028,
    "features": [
      "Backup Camera",
      "Power Steering",
      "Internet",
      "Moon Roof"
    ]
  },
  {
    "model": "Epsilon",
    "trim": "Super",
    "color": "Black",
    "price": 58138,
    "features": [
      "Air Conditioning",
      "Cruise Control",
      "Backup Camera"
    ]
  },
  {
    "model": "Epsilon",
    "trim": "Ultimate",
    "color": "White",
    "price": 62178,
    "features": [
      "Air Conditioning",
      "Sat Radio",
      "Moon Roof"
    ]
  },
  {
    "model": "Epsilon",
    "trim": "Ultimate",
    "color": "Black",
    "price": 65768,
    "features": [
      "Air Conditioning",
      "Cruise Control",
      "Internet"
    ]
  },
  {
    "model": "Epsilon",
    "trim": "Ultimate",
    "color": "Red",
    "price": 76222,
    "features": [
      "Air Conditioning",
      "Backup Camera",
      "Internet",
      "Sat Radio"
    ]
  },
  {
    "model": "Epsilon",
    "trim": "Ultimate",
    "color": "Silver",
    "price": 78250,
    "features": [
      "Air Conditioning",
      "Cruise Control",
      "Backup Camera",
      "Sat Radio",
      "Moon Roof"
    ]
  },
  {
    "model": "Epsilon",
    "trim": "Ultimate",
    "color": "Blue",
    "price": 72339,
    "features": [
      "Air Conditioning",
      "Cruise Control",
      "Internet",
      "4WD"
    ]
  },
  {
    "model": "Epsilon",
    "trim": "Ultimate",
    "color": "Blue",
    "price": 101294,
    "features": [
      "Air Conditioning",
      "Cruise Control",
      "Backup Camera",
      "Power Steering",
      "Internet",
      "4WD",
      "Moon Roof"
    ]
  },
  {
    "model": "Epsilon",
    "trim": "Ultimate",
    "color": "Gold",
    "price": 92752,
    "features": [
      "Air Conditioning",
      "Power Steering",
      "Internet",
      "Sat Radio",
      "4WD",
      "Moon Roof"
    ]
  },
  {
    "model": "Epsilon",
    "trim": "Ultimate",
    "color": "Red",
    "price": 84684,
    "features": [
      "Air Conditioning",
      "Cruise Control",
      "Backup Camera",
      "Internet",
      "Sat Radio",
      "4WD"
    ]
  },
  {
    "model": "Epsilon",
    "trim": "Ultimate",
    "color": "Black",
    "price": 88979,
    "features": [
      "Backup Camera",
      "Power Steering",
      "Internet",
      "Sat Radio",
      "4WD",
      "Moon Roof"
    ]
  },
  {
    "model": "Epsilon",
    "trim": "Ultimate",
    "color": "White",
    "price": 87722,
    "features": [
      "Air Conditioning",
      "Cruise Control",
      "Power Steering",
      "Internet",
      "4WD"
    ]
  },
  {
    "model": "Epsilon",
    "trim": "Ultimate",
    "color": "Gold",
    "price": 81367,
    "features": [
      "Backup Camera",
      "Power Steering",
      "Internet",
      "Sat Radio"
    ]
  }
];
	
	return {
		
		getModels: function() {
			return models;
		},

		getTrims: function() {
			return trims;
		},

		getColors: function() {
			return colors;
		},

		getFeatures: function() {
			return features;
		},
		
		search:function(filters) {
			var def = $.Deferred();

			var results = inventory.filter(function(elm) {
				if(filters.minprice && elm.price < filters.minprice) return false;
				if(filters.maxprice && elm.price > filters.maxprice) return false;
                if(filters.model && elm.model != filters.model) return false;
                if(filters.trim && elm.trim != filters.trim) return false;
                if(filters.color && elm.color != filters.color) return false;
                if(filters.features && filters.features.length) {
                    //every feature has to exist
                    for(var i=0, len=filters.features.length;i<len;i++) {
                        if(elm.features.indexOf(filters.features[i]) == -1) return false;
                    }
                }
                //Hack here to give our cars an image
                var imgUrl = "http://dummyimage.com/250x250/";
                switch(elm.color) {
                    case "Red": imgUrl += "ff0000/000000"; break;
                    case "Blue": imgUrl += "0000ff/000000"; break;
                    case "Silver": imgUrl += "c0c0c0/000000"; break;
                    case "Gold": imgUrl += "ffD700/000000"; break;
                    case "Black": imgUrl += "000000/FFFFFF"; break;
                    case "White": imgUrl += "FFFFFF/000000"; break;    
                }
                imgUrl += "&text="+elm.model+"+"+elm.trim;
                elm.imgUrl = imgUrl;
				return true;
			});
			
			def.resolve(results);
			
			return def.promise();

		
		}
	};

}());
