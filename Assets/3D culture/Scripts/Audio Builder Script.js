var guiText_prefab: GameObject;
var mat: Material;
var audios: AudioClip[];
var dscp: String[]; // Singer, Name of the Song, Time of Release...
var music_boxes: GameObject[];
var box_x: float[];
var box_z: float[];
var box_y: float = 2.5;

function Start()
{
	var index = 0;
	for(var audio: AudioClip in audios)
	{
		music_boxes[index] = GameObject.CreatePrimitive(PrimitiveType.Cube);
		music_boxes[index].transform.position = Vector3(box_x[index], box_y, box_z[index]);
		//music_boxes[index].transform.Rotate(0, 0, 90);
		music_boxes[index].renderer.material = mat;
		music_boxes[index].AddComponent("AudioSource");
		music_boxes[index].audio.clip = audios[index];
		music_boxes[index].audio.playOnAwake = false;
		music_boxes[index].AddComponent("Play And Rotate Script");
		
		//Attach a GUIText to the GameObject, but now it will be hidden.
		//When the audience clicks it, the guiText will be displayed.
		//music_boxes[index].AddComponent("GUIText");
		//music_boxes[index].guiText.text = dscp[index];
		//music_boxes[index].guiText.transform.position = Vector3(0, 0, 0);
		
		music_boxes[index].AddComponent("GUITextDisplayScript");
		// I'm using renderer simply because it's a component
		music_boxes[index].renderer.SendMessage("Pass", dscp[index]);
		music_boxes[index].renderer.SendMessage("SetPrefab", guiText_prefab);
		
		index++;
	}	
}

