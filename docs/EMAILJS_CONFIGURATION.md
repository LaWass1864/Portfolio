# Configuration EmailJS pour le formulaire de contact

Ce guide explique comment configurer EmailJS pour que le formulaire de contact du portfolio envoie des emails.

## Prérequis

- Un compte EmailJS (gratuit)
- Un compte Gmail (ou autre service email)

---

## Étape 1 : Créer un compte EmailJS

1. Aller sur [https://www.emailjs.com/](https://www.emailjs.com/)
2. Cliquer sur **"Sign Up"**
3. Créer un compte via email ou Google/GitHub
4. Vérifier son email si nécessaire

---

## Étape 2 : Ajouter un service d'email

1. Aller dans **"Email Services"** (menu de gauche)
2. Cliquer sur **"Add New Service"**
3. Choisir **Gmail** (recommandé)
4. Se connecter et autoriser EmailJS
5. **Noter le Service ID** (exemple : `service_abc1234`)

---

## Étape 3 : Créer un template d'email

1. Aller dans **"Email Templates"**
2. Cliquer sur **"Create New Template"**
3. Configurer le template :

### Nom du template

━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 INFORMATIONS DU CONTACT
━━━━━━━━━━━━━━━━━━━━━━━━━━
👤 Nom : {{from_name}}
✨ Prénom : {{from_prenom}}
📧 Email : {{from_email}}
━━━━━━━━━━━━━━━━━━━━━━━━━━
💬 MESSAGE
━━━━━━━━━━━━━━━━━━━━━━━━━━
{{message}}
━━━━━━━━━━━━━━━━━━━━━━━━━━

4. Dans **"To Email"**, mettre votre adresse email personnelle
5. Cliquer sur **"Save"**
6. **Noter le Template ID** (exemple : `template_xyz7890`)

---

## Étape 4 : Récupérer la clé publique

1. Aller dans **"Account"** → **"General"**
2. Copier la **Public Key** (exemple : `aBcDeFgH123456`)

---

## Étape 5 : Configuration dans le code

### IDs à remplacer dans `index.html`

Ouvrir le fichier `index.html` et chercher la section EmailJS dans le `<script>`.

**Remplacer les 3 valeurs suivantes :**
```javascript
// Ligne ~200
emailjs.init("TA_CLE_PUBLIQUE_ICI"); 
// ⬆️ Remplacer par votre Public Key

// Ligne ~215
emailjs.sendForm('TON_SERVICE_ID', 'TON_TEMPLATE_ID', this)
// ⬆️ Remplacer par voytr Service ID et Template ID

