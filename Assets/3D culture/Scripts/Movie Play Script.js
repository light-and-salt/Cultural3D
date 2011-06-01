

function OnMouseUp () 
{
	if(renderer.material.mainTexture.isPlaying == false)
	{
		renderer.material.mainTexture.Play();
		audio.Play();
	}
	else if(renderer.material.mainTexture.isPlaying == true)
	{
		renderer.material.mainTexture.Stop();
		audio.Stop();
	}
	
}