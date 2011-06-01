var guiText_prefab: GameObject;
var dscp: String[];
var movt: MovieTexture[];
var movt_x: float[] ;
var movt_z: float[];
var movt_y: float = 4.5;
var screen: GameObject[];
var screen_thickness: float = 0.01;
var screen_scale: float = 0.05;
var icon_material: Material;
var audio_box: GameObject;
var minD: float = 20;
var maxD: float = 50;

function Start()
{
	var index = 0;
	for(var tex:MovieTexture in movt)
	{
		screen[index] = GameObject.CreatePrimitive(PrimitiveType.Cube);
		screen[index].transform.position = Vector3(movt_x[index], movt_y+screen_scale*movt[index].height*0.5, movt_z[index]);
		screen[index].transform.localScale = Vector3(screen_thickness, screen_scale*movt[index].height,screen_scale*movt[index].width );
		screen[index].renderer.material.mainTexture = movt[index];
		
		screen[index].AddComponent("AudioSource");
		screen[index].audio.clip = movt[index].audioClip;
		screen[index].audio.playOnAwake = false;
		screen[index].audio.minDistance = minD;
		screen[index].audio.maxDistance = maxD;
		screen[index].transform.Rotate(0, -90, 0);
		
		screen[index].AddComponent("Movie Play Script");
		screen[index].AddComponent("GUITextDisplayScript");
		// I'm using renderer simply because it's a component
		screen[index].renderer.SendMessage("Pass", dscp[index]);
		screen[index].renderer.SendMessage("SetPrefab", guiText_prefab);
		index++;
	}
}
