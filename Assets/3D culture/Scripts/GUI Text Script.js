var pos_x: float = 0.12;
var pos_y: float = 0.9;
var audience: GameObject;
function Start()
{
	transform.position = Vector3(pos_x, pos_y, 1);
}
function Update () {
	var x: int = audience.transform.position.x;
	var y: int = audience.transform.position.z;
	guiText.text = "N:\n"+x+"\nE:\n"+y;
}