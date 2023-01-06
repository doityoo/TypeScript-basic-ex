// 클래스안에 메소드중 abstract이 하나 이상일 경우 클래스 앞에 abstract을 붙인다.
// 추상 클래스는 일부 상위 클래스를 기반으로 하는 모든 클래스가 일부 공통 메소드 또는 속성을 공유하도록 하려는 경우 아주 유용할 수 있다.
abstract class Department {
  static fiscalYear = 2020;
  // private readonly id: string;
  // private name: string;
  protected employees: string[] = [];
  constructor(protected readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
    // console.log(Department.fiscalYear);
  }
  static createEmployee(name: string) {
    return { name: name };
  }
  // abstract 메소드에는 {}를 없애고 타입설정(void)를 붙인다.
  // 메소드의 형태와 메소드의 구조가 어떤 것인지를 정의하고 있을 뿐 그 외에는 아무 것도 정의하지 않는 것.
  // 하위 상속 클래스에 에러가 발생할 것이다. abstract describe를 써줘야 한다. Department 클래스를 기반하기 때문에 이 메소드는 어떤 클래스로든 구현되어야 한다.
  abstract describe(this: Department): void;
  addEmployee(employee: string) {
    // validation etc
    // this.id = 'd2';
    this.employees.push(employee);
  }
  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }
  // 하위 클래스인 ITDepartment에도 describe를 사용해야 한다(하지 않으면 에러 발생)
  describe() {
    console.log('IT Department - ID: ' + this.id);
  }
}

 

const employee1 = Department.createEmployee('Max');
console.log(employee1, Department.fiscalYear);

const it = new ITDepartment('d1', ['Max']); 
it.addEmployee('Max');
it.addEmployee('Manu');
// it.employees[2] = 'Anna';
it.describe();
it.name = 'NEW NAME';
it.printEmployeeInformation();
console.log(it);
