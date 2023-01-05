// 대부분의 사용 사례에서 모든 속성과 필드가 생성자에서 초기화되는 클래스가 많이 사용됩니다.
// 따라서 이는 필드를 찾은 다음 값을 저장해야 하는 이중 초기화 코드를 한 번에 처리하도록 축약한 것.
// 생성자가 취할 인수를 정의하면 이 앞에서 접근 제어자를 지닌 모든 인수에 대해
// 동일한 이름의 속성이 생성되고 인수에 대한 값이 생성된 속성에 저장되는 것.

class Department {
	public name: string; // 전역에서 name에 접근할 수 있음.
	private employees: string[] = []; // private Department객체에서만 employees에 접근할 수 있음.

	constructor(n: string) {
		this.name = n;
	}

	describe(this: Department) {
		console.log('Department: ' + this.name);
	}

	addEmployee(employee: string) {
		// validation etc
		this.employees.push(employee);
	}

	printEmployeeInformation() {
		console.log(this.employees.length);
		console.log(this.employees);
	}
}

const accounting = new Department('Accounting');

accounting.addEmployee('Max');
accounting.addEmployee('Manu');

// accounting.employees[2] = 'Anna'; // Department에서 empplyees을 private로 설정하면 에러 발생(class 밖에서 접근했기 때문)

accounting.describe();
accounting.name = 'NEW NAME';
accounting.printEmployeeInformation();

// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };

// accountingCopy.describe();
