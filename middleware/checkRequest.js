export function checkRequestTimeAndDay(req, res, next){
    const currentDate = new Date();
    const currentHour = currentDate.getHours(); // Obtenir l'heure actuelle
    const currentDay = currentDate.getDay(); // Obtenir le jour de la semaine (0 = dimanche, 1 = lundi, etc.)
  
    const startHour = 9; // Heure de début autorisée
    const endHour = 17; // Heure de fin autorisée
    const allowedDays = [1, 2, 3, 4, 5]; // Jours autorisés (1 = lundi, 5 = vendredi)
  
    if (
      currentHour >= startHour &&
      currentHour < endHour &&
      allowedDays.includes(currentDay)
    ) {
      console.log(`Requête acceptée à ${currentHour}h, jour: ${currentDay}`);
      next(); // Passer au middleware suivant si les conditions sont remplies
    } else {
      console.log(`Requête rejetée à ${currentHour}h, jour: ${currentDay}`);
      res.render("error", { message: "Desole, le site est ferme essayer plus tard dans les heures de travail" });
    }
  };
  