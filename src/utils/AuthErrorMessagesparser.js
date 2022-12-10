export default function(errorcode){
    switch (errorcode) {
        case "auth/email-already-exists":
            return "Sağlanan e-posta zaten mevcut bir kullanıcı tarafından kullanılıyor.";

        case "auth/user-not-found":
            return "Sağlanan tanımlayıcıya karşılık gelen mevcut bir kullanıcı kaydı yok.";
        case "auth/invalid-email":
            return 'The email address is badly formatted.';
        case 'auth/weak-password':
            return 'şifre çok zayıf';

        case 'auth/wrong-password':
            return 'parola geçersiz';


        default:
            return (errorcode);
    }
}