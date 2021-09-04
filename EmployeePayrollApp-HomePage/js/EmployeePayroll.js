class EmployeePayrollData {
    get id(){
        return this._id;
    }

    set id(id){
        this._id = id;
    }

    getName() {
        return this._name;
    }

    setName(name) {
        let nameRegex = RegExp('^[A-Z]{1,}[a-z]{2,}$');
        if (nameRegex.test(name))
            this._name = name;
        else
            throw "Name is invalied";
    }

    getPicture() {
        return this._picture;
    }
    setPicture(picture) {
        this._picture = picture;
    }

    getGender() {
        return this._gender;
    }

    setGender(gender) {
        let genderRegex = RegExp('^[MFmf]{1}');
        if(genderRegex.test(gender))
        this._gender = gender;
        else throw "Gender is invalid!";
    }

    getDepartment() {
        return this._department;
    }

    setDepartment(department) {
        this._department = department;
    }

    getSalary() {
        return this._salary;
    }

    setSalary(salary) {
        this._salary = salary;
    }

    getNotes() {
        return this._notes;
    }

    setNotes(notes) {
        this._notes = notes;
    }

    getStartDate() {
        return this._startDate;
    }

    setStartDate(startDate) {
        this._startDate = startDate;
    }

    toString (){
        const options = {year: 'numeric', month: 'long', day: 'numeric'};
        const empDate =!this.startDate ? "undefined":
                        this.startDate.toLocalDateString("en-US",options);
        return "id= "+this.id + ", name= "+ this.name+", gender= "+this.gender +", profilePic= "
                + this.picture +", department= "+this.department +", salary= "+this.salary +
                ", startDate = "+ this.startDate+", notes= "+ this.notes;
    }
}