# 📦 Product App (Angular)

Une application Angular simple qui permet d'afficher la liste des produits récupérés depuis un backend REST.  
Le backend est déjà disponible sur GitHub et fournit les données via l'endpoint `http://localhost:8080/produits`.

---

## 📌 Backend utilisé

👉 Backend récupéré depuis ce dépôt :  
[BackEnd](https://github.com/mohamedYoussfi/products-service)

---

## 📷 Captures d'écran

### ✅ Exécution réussie du backend
![Backend Running](/assets/images/BEsuccess.png)

---

### ✅ Résultat (`http://localhost:4200`)
![Result](/assets/images/resultatGet.png)

---

### 📊 Résultat dans le navigateur (`http://localhost:4200`)
![Produits Affichés](/assets/images/Frontsuccess.png)


---

## 🚀 Installation & Exécution

### 📥 Prérequis :
- Node.js installé
- Angular CLI installé (`npm install -g @angular/cli`)
- Backend cloné et démarré

---

### 📦 Installer les dépendances du frontend

      npm install
### ▶️ Démarrer l'application Angular

    ng serve
    
### 👉 Puis ouvrir http://localhost:4200

### 🛠️ Démarrer le Backend
Cloner le backend depuis le dépôt :

    git clone https://github.com/mohamedYoussfi/products-service
    cd products-service
    
Puis démarrer le backend (selon s'il est en Spring Boot par exemple)  
    
    ./mvnw spring-boot:run
## 📡 Endpoint utilisé
Le backend expose les produits via :

    GET http://localhost:8080/produits
## 📜 Fonctionnalités
Afficher la liste des produits

Récupération des données depuis un backend REST

Affichage sous forme de tableau

## 📌 Auteur
Ilyass Barkouk

