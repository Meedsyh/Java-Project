import.java.util.Scanner;

   //Class Client
public class Client {
    private int idClient;
    private String nom;
    private String prenom;
    private int tel;
    private String adresse;
    private String email;

    public Client(int idClient, String nom, String prenom, String tel, String adresse, String email) {
        this.idClient = idClient;
        this.nom = nom;
        this.prenom = prenom;
        this.tel = tel;
        this.adresse = adresse;
        this.email = email;
    }

    public int getIdClient() {
        return idClient;
    }

    public String toString() {
        return "Client{" +
                "idClient=" + idClient +
                ", nom=" + nom +
                ", prenom=" + prenom +
                ", tel=" + tel +
                ", adresse=" + adresse +
                ", email=" + email +
                "}";
    }
}

   //Class Contact
public class Contact {
    private int idContact;
    private String nom;
    private String prenom;
    private String tel;
    private String message;
    private String sujet;

    public Contact(int idContact, String nom, String prenom, String tel, String message, String sujet) {
        this.idContact = idContact;
        this.nom = nom;
        this.prenom = prenom;
        this.tel = tel;
        this.message = message;
        this.sujet = sujet;
    }
    public void envoyer() {
        System.out.println("Données de contact envoyées !");
        System.out.println("ID : " + idContact);
        System.out.println("Nom : " + nom);
        System.out.println("Prénom : " + prenom);
        System.out.println("Téléphone : " + tel);
        System.out.println("Message : " + message);
        System.out.println("Sujet : " + sujet);
    }

    public void supprimer() {
        System.out.println("Données de contact supprimées !");
    }
}


   //Class Service
public class Service {
    private int idService;
    private String libelle;
    private double prix;
    private String detaille;

    public Service(int idService, String libelle, double prix, String detaille) {
        this.idService = idService;
        this.libelle = libelle;
        this.prix = prix;
        this.detaille = detaille;
    }

    public int getIdService() {
        return this.idService;
	}
	
    public void ajouter() {
        System.out.println("Service ajouté :");
        System.out.println("ID : " + idService);
        System.out.println("Libellé : " + libelle);
        System.out.println("Prix : " + prix);
        System.out.println("Détail : " + detaille);
    }

    public void modifier() {
        System.out.println("Service modifié :");
        System.out.println("ID : " + idService);
        System.out.println("Libellé : " + libelle);
        System.out.println("Prix : " + prix);
        System.out.println("Détail : " + detaille);
    }

    public void supprimer() {
        System.out.println("Service supprimé :");
        System.out.println("ID : " + idService);
        System.out.println("Libellé : " + libelle);
        System.out.println("Prix : " + prix);
        System.out.println("Détail : " + detaille);
    }
}

    //Class Admin
	public class Admin {
    private int idAdmin;
    private String login;
    private String motDePasse;

    public Admin(int idAdmin, String login, String motDePasse) {
        this.idAdmin = idAdmin;
        this.login = login;
        this.motDePasse = motDePasse;
    }
}
    public boolean authentifier(String loginSaisi, String motDePasseSaisi) {
        return login.equals(loginSaisi) && motDePasse.equals(motDePasseSaisi);
	}
	

    //Class Commandander Service
	public class CommanderService extends Client,Service {
    private int idCmd;
    private double totalPrix;

    public CommandeService(int idCmd, int idClient, int idservice, double totalPrix) {
        super(idClient);
		super(idservice);
        this.idCmd = idCmd;
        this.service = service;
        this.totalPrix = totalPrix;
    }

    public void ajouter() {
        System.out.println("Commande de service ajoutée :");
        System.out.println("ID Commande : " + idCmd);
        System.out.println("ID Client : " + getIdClient()); 
        System.out.println("ID Service : " + service.getIdService()); 
        System.out.println("Total Prix : " + totalPrix);
    }

    public void supprimer() {
        System.out.println("Commande de service supprimée :");
        System.out.println("ID Commande : " + idCmd);
        System.out.println("ID Client : " + Client.getIdClient());
        System.out.println("ID Service : " + Service.getIdService());
        System.out.println("Total Prix : " + totalPrix);
    }
}


    //Class Test
	public class TestApplication {

    public static void main(String[] args) {
        Client client = new Client(1, "Med", "Syh", "rue ....", "+21600000001", "moo.ss@gmail.com");
        client.consulter();
		
        Contact contact = new Contact(1, "Ahmed", "behi", "+21600000002", "Bonjour!", "Demande d'information");
        contact.envoyer();
        contact.supprimer();
		
        Service service = new Service(1, "Service",50DT, "Description du service");
        service.ajouter();
        service.modifier();
        service.supprimer();
		
        Admin admin = new Admin(1, "User", "User");
        boolean authentifie = admin.authentifier("User", "User");
        System.out.println("L'administrateur est authentifié : " + authentifie);
		
        CommandeService commanderService = new CommandeService(1, 1, 1, 50DT);
        commanderService.ajouter();
        commanderService.supprimer();
    }
}
