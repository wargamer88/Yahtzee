var yahtzeeArray = new Array();
	
	//opties
	var yahtzee=0;
	var groteStraat=0;
	var kleineStraat=0;
	var carre=0;
	var threeOFaKind=0;
	var fullHouse=0;
	var chance=0;
	
	
//rol functie
function rollen(){
	//variabelen
	var teller=0;
	var x;
	var y;
	
		while (yahtzee!=1) {
			//dobbelstenen gooien
			var z = 0;
			for (y=1; y<6;y++){
				x = Math.floor(Math.random()*6) + 1;  //1-6
				document.getElementById("d"+y).innerHTML = "<img src ='Dobbel/"+ x +"c.gif' width=100px height=100px />";
				
				yahtzeeArray[z] = x;
				z++;
			}
			teller++;
			//array sorteren
			yahtzeeArray.sort();
			//opties selecteren
			selectOptions();
			
			
			
		}

	document.getElementById("chance").innerHTML = chance ;
	document.getElementById("fullHouse").innerHTML = fullHouse ;
	document.getElementById("threeOFaKind").innerHTML = threeOFaKind ;
	document.getElementById("carre").innerHTML = carre ;
	document.getElementById("kleineStraat").innerHTML = kleineStraat ;
	document.getElementById("groteStraat").innerHTML = groteStraat ;
	document.getElementById("Overige").innerHTML = teller ;
	document.getElementById("yahtzee").innerHTML = "<h1>YAHTZEE</h1>" ;
	
	yahtzee=0;
	groteStraat=0;
	kleineStraat=0;
	carre=0;
	threeOFaKind=0;
	fullHouse=0;
	chance=0;
};

function selectOptions(){
	
	//YahtZee
	if(yahtzeeArray[0] == yahtzeeArray[1] && yahtzeeArray[1] == yahtzeeArray[2] && yahtzeeArray[2] == yahtzeeArray[3] && yahtzeeArray[3] == yahtzeeArray[4])
		{
			yahtzee=1;
		}
		//Grote straat
		else if (yahtzeeArray[0] == yahtzeeArray[1] - 1 && yahtzeeArray[1] == yahtzeeArray[2] - 1 && yahtzeeArray[2] == yahtzeeArray[3] - 1 && yahtzeeArray[3] == yahtzeeArray[4] - 1)
			{
				groteStraat += 1;
			}
			//kleine straat
			else if (yahtzeeArray[0] == yahtzeeArray[1] - 1 && yahtzeeArray[1] == yahtzeeArray[2] - 1 && yahtzeeArray[2] == yahtzeeArray[3] - 1)
				{
					kleineStraat +=1;
				}
				else if (yahtzeeArray[1] == yahtzeeArray[2] - 1 && yahtzeeArray[2] == yahtzeeArray[3] - 1 && yahtzeeArray[3] == yahtzeeArray[4] - 1)
					{
						kleineStraat +=1;
					}
					//Carré
					else if (yahtzeeArray[0] == yahtzeeArray[1] && yahtzeeArray[1] == yahtzeeArray[2] && yahtzeeArray[2] == yahtzeeArray[3])
						{
							carre+=1;
						}
						else if (yahtzeeArray[1] == yahtzeeArray[2] && yahtzeeArray[2] == yahtzeeArray[3] && yahtzeeArray[3] == yahtzeeArray[4])
							{
								carre+=1;
							}
							//full house
							else if (yahtzeeArray[0] == yahtzeeArray[1] && yahtzeeArray[1] == yahtzeeArray[2] && yahtzeeArray[3] == yahtzeeArray[4])
								{
									fullHouse+=1;
								}
								else if (yahtzeeArray[0] == yahtzeeArray[1] && yahtzeeArray[2] == yahtzeeArray[3] && yahtzeeArray[3] == yahtzeeArray[4])
									{
										fullHouse+=1;
									}
									//3-of-a-kind
									else if (yahtzeeArray[1] == yahtzeeArray[2] && yahtzeeArray[2] == yahtzeeArray[3])
										{
											threeOFaKind+=1;
										}
										else if (yahtzeeArray[2] == yahtzeeArray[3] && yahtzeeArray[3] == yahtzeeArray[4])
											{
												threeOFaKind+=1;
											}
											else if (yahtzeeArray[0] == yahtzeeArray[1] && yahtzeeArray[1] == yahtzeeArray[2])
												{
													threeOFaKind+=1;
												}
												//chance
												else
													{
														chance+=1;
													}


}