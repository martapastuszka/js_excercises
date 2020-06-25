class Wallet {
    constructor(money){
        let _money = money;
        //pobieranie aktualnej zawartości portfelwa
        this.getWalletValue = () => _money;

        //Sprawdzenie czy użytkownik ma odpowiednią ilość środków
        this.checkCanPlay = value => {
            if(_money >=value) return true;
            return false;
        }
    }
}

const wallet = new Wallet(200)