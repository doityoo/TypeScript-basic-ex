class Department {
  // private readonly id: string;
  // private name: string;
  static fiscalYear: 2022;
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  // 클래스의 인스턴스를 생성하지 않고 바로 사용할수 있는 정적 메소드
  static createEmployee(name: string) {
    return { name: name };
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

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

// 이런식으로 해당 클래스를 바로 사용할 수 있다.
const employee1 = Department.createEmployee('Willy');
console.log(employee1, Department.fiscalYear); // {name : 'Willy'} 2022
