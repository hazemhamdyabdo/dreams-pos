<template>
  <div class="main-wrapper">
    <div class="page-wrapper">
      <div class="content">
        <pageheader :title="title" :title1="title1" />
        <!-- /add -->
        <div class="card">
          <div class="card-body">
            <b-form class="was-validated" @submit="save()">
              <b-row>
                <b-col md="4">
                  {{ selectedItem.TEST }}
                  <gfield
                    rules="required"
                    field="select"
                    :options="Percentage"
                    id="englishName"
                    label="label"
                    ref="englishName"
                    v-model="selectedItem.TEST"
                    name="englishName"
                    label-text="englishName"
                  />

                  {{ selectedItem.code }}
                  <vue-select label="really" :options="Percentage"></vue-select>
                  <gfield
                    label-text="Code"
                    ref="code"
                    name="code"
                    id="code"
                    v-model="selectedItem.code"
                    rules="required"
                  />

                  <!-- <label>{{ $t("code") }}</label> -->
                </b-col>
                <b-col md="4">
                  <vue-select
                    :options="nationalities"
                    label="name"
                    v-model="selectedItem.nationality"
                  />
                  <!-- label  -->
                  <!-- <gfield
                      id="label"
                      rules="required"
                      v-model="selectedItem.label"
                      label-text="label"
                    /> -->
                  <!-- <label>{{ $t("label") }}</label>
                  <input type="text" class="form-control" v-model="selectedItem.label" required /> -->
                  <div class="invalid-feedback">
                    {{ $t("NameIsRequired") }}
                  </div>
                </b-col>
                <b-col md="4">
                  <!-- <label>{{ $t("englishName") }}</label>
                  <input type="text" class="form-control" v-model="selectedItem.englishName" /> -->
                </b-col>
              </b-row>
              <b-row>
                <b-col md="2">
                  <label
                    style="font-size: 14px; margin-bottom: 7px"
                    for="general"
                  >
                    {{ $t("general") }}
                  </label>
                  <b-form-group>
                    <b-form-checkbox
                      v-model="selectedItem.isShared"
                      class="mr-0 mt-50"
                      name="is-rtl"
                      inline
                    />
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col md="12">
                  <b-form-group>
                    <label
                      style="font-size: 14px; margin-bottom: 7px"
                      for="customer"
                    >
                      {{ $t("notes") }}
                    </label>
                    <b-form-textarea
                      id="textarea"
                      v-model="selectedItem.notes"
                      label="Notes"
                      rows="3"
                      max-rows="6"
                    />
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col cols="12" class="d-flex justify-content-end">
                  <b-button
                    v-permission="$route.meta.permission"
                    class="mx-2"
                    type="submit"
                    variant="primary"
                    data-action-type="save"
                    @click="() => console.log('sd')"
                  >
                    {{ $t("save") }}
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
        code: "",
        label: "",
        TEST: "",
      },
      totalRows: 0,
      currentPage: 1,
      perPage: 25,
      searchQuery: "",
      sortDirection: "asc",
      filter: null,
      filterOn: [],
      items: [],
      title: "Product Add",
      title1: "Create new product",
      Category: ["Choose Category", "Computers"],
      SubCategory: ["Choose Sub Category", "Fruits"],
      Brand: ["Choose Brand", "Brand"],
      Unit: ["Choose Unit", "Unit"],
      Tax: ["Choose Tax", "2%"],
      Percentage: [
        {
          accountNumber: "string",
          iban: "string",
          branchId: 0,
          isShared: true,
          code: "string",
          text: "string",
          englishName: "string",
          notes: "string",
          id: 1011,
          tenantId: 0,
        },
        {
          accountNumber: "800700",
          iban: "300300",
          branchId: 21,
          isShared: true,
          code: "6",
          text: "بنك فيصل الاسلامى",
          englishName: "بنك فيصل الاسلامى",
          notes: "لا يوجد",
          id: 1009,
          tenantId: 0,
        },
        {
          accountNumber: "5005000",
          iban: "200200",
          branchId: 21,
          isShared: false,
          code: "5",
          text: "بنك القاهرة",
          englishName: "بنك القاهرة",
          notes: null,
          id: 1008,
          tenantId: 0,
        },
        {
          accountNumber: null,
          iban: null,
          branchId: 21,
          isShared: false,
          code: "3",
          text: "بنك مصر",
          englishName: "بنك مصر",
          notes: null,
          id: 1006,
          tenantId: 0,
        },
        {
          accountNumber: "147852369",
          iban: "258963147",
          branchId: 21,
          isShared: true,
          code: "2",
          text: "البنك الاهلى المصرى",
          englishName: "البنك الاهلى المصرى",
          notes: "حساب افراد",
          id: 4,
          tenantId: 0,
        },
        {
          accountNumber: "1452222",
          iban: "123456",
          branchId: 0,
          isShared: true,
          code: "3",
          text: "َQNB",
          englishName: "QNB",
          notes: "حساب شركات",
          id: 3,
          tenantId: 0,
        },
        {
          accountNumber: "13009466",
          iban: "13009466",
          branchId: 0,
          isShared: true,
          code: "ee",
          text: "CIB",
          englishName: "cib",
          notes: "حساب شخصى",
          id: 2,
          tenantId: 0,
        },
        {
          accountNumber: "500500",
          iban: "200200",
          branchId: 1,
          isShared: true,
          code: "1",
          text: "البنك الاهلى",
          englishName: "البنك الاهلى",
          notes: "string",
          id: 1,
          tenantId: 0,
        },
      ],
      Closed: ["Closed", "Open"],
      id: 0,
    };
  },
  mounted() {
    this.id = this.$route.params.id;
    if (this.id > 0) {
      this.getSelected();
    }
  },
  methods: {
    save() {
      this.selectedItem.branchId = this.branchId;
      if (!this.selectedItem.englishName) {
        this.selectedItem.englishName = this.selectedItem.label;
      }
      if (this.selectedItem.id > 0) {
        this.update({
          url: "Nationalities",
          data: this.selectedItem,
          id: this.selectedItem.id,
        }).then(() => {
          this.doneAlert({ text: this.$t("updatedSuccessfully") });
          this.$router.push({ name: "nationality" });
        });
      } else {
        this.create({
          url: "Nationalities",
          data: this.selectedItem,
        }).then(() => {
          this.doneAlert({ text: this.$t("savedSuccessfully") });
          this.$router.push({ name: "nationality" });
        });
      }
    },
    getSelected() {
      this.get({ url: "Nationalities", id: this.id }).then((data) => {
        this.selectedItem = data;
      });
    },
  },
};
</script>
