<?php

if(isset($_POST) && isset($_POST['nom']) && isset($_POST['email']) && isset($_POST['message'])){
   extract($_POST);
   if(!empty($nom) && !empty($email) && !empty($message)){
		$message=str_replace("\'","'",$message);
		$destinataire="giovanny.pied@gmail.com";
		$sujet="Formulaire de contact";
		$message="Une nouvelle question est arrivée \n
		Nom : $nom \n
		Email : $email \n
		Message: $message";
		$entete="From: $nom \n Reply-To: $email";
		mail($destinataire,$sujet,$message,$entete);
		echo "<script language='JavaScript'>alert('Le mail a bien été envoyé.')</script>";
   }
   else{
		echo "Vous n'avez pas rempli tous les champs.";

   }

}
?>
<a href="javascript:history.go(-1)">Retour sur mon portfolio</a>