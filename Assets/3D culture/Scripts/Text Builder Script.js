var prefab: GameObject;
var guiText_prefab: GameObject;
var texts: TextAsset[];
var dscp: String[]; // file name...
var texts_x: float[];
var texts_z: float[];
var texts_y = 4.5;
var text_objs: GameObject[];

function Start()
{
	var index = 0;
	for(var s: TextAsset in texts)
	{
		text_objs[index] = Instantiate(prefab, Vector3(texts_x[index], texts_y, texts_z[index]), Quaternion.identity);
		text_objs[index].transform.Rotate(0, 90, 0);
		
		// the following two lines is for description display
		text_objs[index].AddComponent("GUITextDisplayScript");
		text_objs[index].renderer.SendMessage("Pass", dscp[index]);
		// end
		
		//now is for text file CONTENT display
		text_objs[index].AddComponent("TextDisplayScript");
		//text_objs[index].AddComponent("GUIText");
		text_objs[index].renderer.SendMessage("PassContent", texts[index].text);
		text_objs[index].renderer.SendMessage("SetPrefab", guiText_prefab);
		
		
		index++;
	}
	
}