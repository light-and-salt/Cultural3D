var guiText_prefab: GameObject;
var dscp: String[];
var tex_arry: Texture[];
var tex_x: float[];
var tex_z: float[];
var tex_y = 4.5;
var canvas: GameObject[];
var can_thickness: float = 0.001;
var can_scale: float = 0.2;

function Start()
{
	var index = 0;
	for(var tex:Texture in tex_arry)
	{
		canvas[index] = GameObject.CreatePrimitive(PrimitiveType.Cube);
		canvas[index].transform.position = Vector3(tex_x[index], tex_y+can_scale*tex.height*0.5, tex_z[index]);
		canvas[index].transform.localScale = Vector3(can_thickness, can_scale*tex.height,can_scale*tex.width );
		canvas[index].renderer.material.mainTexture = tex;
		
		canvas[index].AddComponent("GUITextDisplayScript");
		// I'm using renderer simply because it's a component
		canvas[index].renderer.SendMessage("Pass", dscp[index]);
		canvas[index].renderer.SendMessage("SetPrefab", guiText_prefab);
		
		index++;
	}
}
function Update () {
}