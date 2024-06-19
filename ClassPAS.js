class Siswa {
    constructor(Name, Age, Skill, IsMan) {
        this.Name = Name;
        this.Age = Age;
        this.Skill = Skill;
        this.IsMan = IsMan;
    }
}
class Level_X extends Siswa {
    Outing1() {
        console.log(this.Name + " Pergi Outing sehabis PAS ");
    }
}
class Level_XI extends Siswa {
    Outing2() {
        console.log(this.Name + " Pergi Outing pada ahir tahun ");
    }
}

let Kelas_X = new Level_X("Fakhri ", 16, "SIJA", true);
let Kelas_XI = new Level_XI("Ucup ", 17, "WebDev", true);

Kelas_X.Outing1();
Kelas_XI.Outing2();

console.log(Kelas_X);
console.log(Kelas_XI);

//Output

Fakhri  Pergi Outing sehabis PAS 
ClassPAS.JS:11
Ucup  Pergi Outing pada ahir tahun 
ClassPAS.JS:16
Level_X {Name: 'Fakhri ', Age: 16, Skill: 'SIJA', IsMan: true}
ClassPAS.JS:26
Level_XI {Name: 'Ucup ', Age: 17, Skill: 'WebDev', IsMan: true} //
