var content: String;
var has_a_guiText = false;
var prefab_guiText:GameObject;
var copy: GameObject;

function PassContent(s:String)
{
	content = s;
	
}

function SetPrefab(p:GameObject)
{
	prefab_guiText = p;
}

function OnMouseUp () 
{
	if(has_a_guiText == false)
	{
		copy=Instantiate(prefab_guiText, Vector3(0.4, 0.8, 1), Quaternion.identity);
		copy.guiText.text = content;
		has_a_guiText = true;
	}
	else
	{
		GameObject.Destroy(copy);
		has_a_guiText = false;
	}
}