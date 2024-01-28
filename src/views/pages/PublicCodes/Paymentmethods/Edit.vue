<template>
  <div class="main-wrapper">
    <layouts></layouts>
    <sidebar></sidebar>
    <div class="page-wrapper">
      <div class="content">
        <pageheader :title="title" :title1="title1" />
        <!-- /add -->
        <div class="card">
          <div class="card-body">
            <b-form class="was-validated" @submit="save">
              <!-- class="was-validated" -->
              <b-row>
                <b-col md="4">
                  <gfield label-text="TEST" rules="required" ref="code" name="code" id="code"
                    v-model="selectedItem.code" />

                  <!-- <label>{{ $t("code") }}</label> -->
                  <!-- <input type="text" class="form-control" v-model="selectedItem.code" />
                  <div class="invalid-feedback">
                    {{ $t("codeIsRequired") }}
                  </div> -->
                </b-col>
                <b-col md="4">
                  <!-- arabicName  -->
                  <!-- <gfield
                      id="arabicName"
                      rules="required"
                      v-model="selectedItem.arabicName"
                      label-text="arabicName"
                    /> -->
                  <label>{{ $t("arabicName") }}</label>
                  <input type="text" class="form-control" v-model="selectedItem.arabicName" />
                  <div class="invalid-feedback">
                    {{ $t("NameIsRequired") }}
                  </div>
                </b-col>
                <b-col md="4">
                  <!-- <gfield
                      id="englishName"
                      ref="englishName"
                      v-model="selectedItem.englishName"
                      name="englishName"
                      label-text="englishName"
                    /> -->
                  <label>{{ $t("englishName") }}</label>
                  <input type="text" class="form-control" v-model="selectedItem.englishName" />
                </b-col>
              </b-row>
              <b-row>
                <!-- accountNumber -->
                <b-col md="4">
                  <!-- <gfield
                      id="accountNumber"
                      v-model="selectedItem.accountNumber"
                      name="accountNumber"
                      label-text="accountNumber"
                    /> -->
                  <label>{{ $t("bankName") }}</label>
                  {{ selectedItem.bankId }}
                  <g-select :dir="isRight ? 'rtl' : 'rtl'" label-text="bankName" v-model="selectedItem.bankId"
                    :options="test" label="arabicName" />
                  {{ selectedItem.bankId }}
                  <!-- <vue-select :dir="isRight ? 'rtl' : 'rtl'" :options="names" v-model="selectedItem.bankId" /> -->
                  <!-- <gfield abel-text="select" rules="required" ref="select" name="select" id="select"
                    v-model="selectedItem.bankId" /> -->
                  <gfield label-text="TEST" field="select" rules="required" ref="code" name="code" id="code"
                    :options="test" v-model="selectedItem.code" />


                </b-col>
                <!-- iban  -->
                <b-col md="4">
                  <label style="font-size: 14px; margin-bottom: 7px" for="general">
                    {{ $t('general') }}
                  </label>
                  <b-form-group>
                    <b-form-checkbox v-model="selectedItem.isShared" class="mr-0 mt-50" name="is-rtl" inline />
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col md="12">
                  <b-form-group>
                    <label style="font-size: 14px; margin-bottom: 7px" for="customer">
                      {{ $t('notes') }}
                    </label>
                    <b-form-textarea id="textarea" v-model="selectedItem.notes" label="Notes" rows="3" max-rows="6" />
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col cols="12" class="d-flex justify-content-end">
                  <b-button v-permission="$route.meta.permission" class="mx-2" type="submit" variant="primary"
                    data-action-type="save">
                    {{ $t('save') }}
                  </b-button>
                </b-col>
              </b-row>
            </b-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  props: {
    id: {
      type: [Number, String],
      default: 0,
    },
  },
  data() {
    return {
      selectedItem: {
        code: '',
        arabicName: ''
      },
      test: [
        {
          "accountNumber": "string",
          "iban": "string",
          "branchId": 0,
          "isShared": true,
          "code": "string",
          "arabicName": "string",
          "englishName": "string",
          "notes": "string",
          "id": 1011,
          "tenantId": 0
        },
        {
          "accountNumber": "800700",
          "iban": "300300",
          "branchId": 21,
          "isShared": true,
          "code": "6",
          "arabicName": "بنك فيصل الاسلامى",
          "englishName": "بنك فيصل الاسلامى",
          "notes": "لا يوجد",
          "id": 1009,
          "tenantId": 0
        },
        {
          "accountNumber": "5005000",
          "iban": "200200",
          "branchId": 21,
          "isShared": false,
          "code": "5",
          "arabicName": "بنك القاهرة",
          "englishName": "بنك القاهرة",
          "notes": null,
          "id": 1008,
          "tenantId": 0
        },
        {
          "accountNumber": null,
          "iban": null,
          "branchId": 21,
          "isShared": false,
          "code": "3",
          "arabicName": "بنك مصر",
          "englishName": "بنك مصر",
          "notes": null,
          "id": 1006,
          "tenantId": 0
        },
        {
          "accountNumber": "147852369",
          "iban": "258963147",
          "branchId": 21,
          "isShared": true,
          "code": "2",
          "arabicName": "البنك الاهلى المصرى",
          "englishName": "البنك الاهلى المصرى",
          "notes": "حساب افراد",
          "id": 4,
          "tenantId": 0
        },
        {
          "accountNumber": "1452222",
          "iban": "123456",
          "branchId": 0,
          "isShared": true,
          "code": "3",
          "arabicName": "َQNB",
          "englishName": "QNB",
          "notes": "حساب شركات",
          "id": 3,
          "tenantId": 0
        },
        {
          "accountNumber": "13009466",
          "iban": "13009466",
          "branchId": 0,
          "isShared": true,
          "code": "ee",
          "arabicName": "CIB",
          "englishName": "cib",
          "notes": "حساب شخصى",
          "id": 2,
          "tenantId": 0
        },
        {
          "accountNumber": "500500",
          "iban": "200200",
          "branchId": 1,
          "isShared": true,
          "code": "1",
          "arabicName": "البنك الاهلى",
          "englishName": "البنك الاهلى",
          "notes": "string",
          "id": 1,
          "tenantId": 0
        }
      ],
      banks: [],
      totalRows: 0,
      currentPage: 1,
      perPage: 25,
      searchQuery: '',
      sortDirection: 'asc',
      filter: null,
      filterOn: [],
      items: [],
      title: 'Product Add',
      title1: 'Create new product',
      Category: ['Choose Category', 'Computers'],
      SubCategory: ['Choose Sub Category', 'Fruits'],
      Brand: ['Choose Brand', 'Brand'],
      Unit: ['Choose Unit', 'Unit'],
      Tax: ['Choose Tax', '2%'],
      Percentage: ['Percentage', '10%', '20%'],
      Closed: ['Closed', 'Open'],
      id: 0
    };
  },
  computed: {
    names() {
      return this.test.map(bank => bank.arabicName);
    }
  },
  mounted() {
    console.log(this.$route.params.id);
    console.log(this.id);
    this.id = this.$route.params.id;
    if (this.id > 0) {
      this.getSelectedPaymentMehtod();
    }
    this.getBanks();
  },
  methods: {
    getBanks() {
      this.get({ url: 'Banks' }).then((data) => {
        // this.items = this.getItemsBasedOnCurrentBranch(data);
        this.banks = data;
        console.log(this.banks);
      });
    },
    save() {
      this.selectedItem.branchId = this.branchId;
      if (!this.selectedItem.englishName) {
        this.selectedItem.englishName = this.selectedItem.arabicName;
      }
      if (this.selectedItem.id > 0) {
        this.update({
          url: 'PaymentMethods',
          data: this.selectedItem,
          id: this.selectedItem.id,
        }).then(() => {
          this.doneAlert({ text: this.$t('updatedSuccessfully') });
          this.$router.push({ name: 'PaymentMehtod' });
        });
      } else {
        this.create({
          url: 'PaymentMethods',
          data: this.selectedItem,
        }).then(() => {
          this.doneAlert({ text: this.$t('savedSuccessfully') });
          this.$router.push({ name: 'PaymentMehtod' });
        });
      }
    },
    getSelectedPaymentMehtod() {
      this.get({ url: 'PaymentMethods', id: this.id }).then((data) => {
        this.selectedItem = data;
      });
    },
  },
};
</script>
  