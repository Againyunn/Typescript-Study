class Department {
  // private readonly id: string;
  public name: string;
  protected employees: string[] = [];

  constructor(private readonly id: string, n: string) {
    this.name = n;
  }

  describe(this: Department) {
    console.log(`Department(${this.id}): `, this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

// class 상속
// class를 상속받으면 생성자를 포함하여 Department 클래스가 가진 모든 속성과 정보를 자동으로 가져온다.
class ITDepartment extends Department {
  // public admins: string[]

  constructor(id: string, public admins: string[]) {
    super(id, "IT"); // 상속할 변수에 하위 class가 변수에 조작을 가해야 하는 경우(해당 하위 class 공통적으로)
    // super와 this를 함께 사용해야 하는 경우에는 반드시 super가 this보다 코드 상위에 위치해야 한다.
  }
}

class AccountingDepartment extends Department {
  private lastReports: string;

  // getter 함수
  get mostRecentReports() {
    if (this.lastReports) return this.lastReports;

    throw new Error("not found any report");
  }

  // setter 함수
  set mostRecentReports(value: string) {
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReports = reports[0];
  }

  addEmployee(employee: string): void {
    this.employees.push(employee);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReports = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const accounting = new AccountingDepartment("d1", ["Max"]);

accounting.addEmployee("Max");
accounting.addEmployee("Manu");
accounting.describe();
accounting.printEmployeeInformation();
console.log(accounting.mostRecentReports); // getter로 private lastReports의 값을 가져올 수 있다.
accounting.mostRecentReports = "new report"; // setter로 private lastReports의 값을 지정할 수 있다.

const it = new ITDepartment("d1", ["Max"]);
it.name = "ITDepartment";

it.addEmployee("Max");
it.addEmployee("Manu");
it.describe();
it.printEmployeeInformation();
