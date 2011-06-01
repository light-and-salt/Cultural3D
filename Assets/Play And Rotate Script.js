var vol = 1;

function OnMouseUp () {
	if(audio.isPlaying == true)
	{
		audio.Stop();
	}
	else if(audio.isPlaying == false)
	{
		audio.volume = vol;
		audio.Play();
	}
}

function Update ()
{
	if(audio.isPlaying == true)
		transform.Rotate(0, 30*Time.deltaTime, 0);
}