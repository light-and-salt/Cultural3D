
var content: String;
var prefab_guiText:GameObject;
var copy: GameObject;

function Pass(s:String)
{
	content = s;
}

function SetPrefab(p:GameObject)
{
	prefab_guiText = p;
}

function OnMouseEnter () 
{
	copy=Instantiate(prefab_guiText, Vector3(0.1, 0.1, 1), Quaternion.identity);
	copy.guiText.text = content;
}

function OnMouseExit()
{
	GameObject.Destroy(copy);
}
	
