<template>
  <div>
      <CRow>
          <CCol lg="12">
            <transition name="fade">
                <CCard>
                    <CCardHeader>
                        <strong>설정</strong>
                    </CCardHeader>
                    <CCardBody>
                        <CForm>

                        <CRow form class="form-group">
                            <CCol sm="3">
                                {{'완성상태'}}
                            </CCol>
                            <CInputRadioGroup
                                class="col-sm-9"
                                :options="['전체', '스토리', '미완성']"
                                :custom="true"
                                :checked="`전체`"
                                :inline="true"
                            />
                        </CRow>
                        <CRow form class="form-group">
                            <CCol sm="3">
                                {{'공개'}}
                            </CCol>
                            <CInputRadioGroup
                                class="col-sm-9"
                                :options="['전체', 'Y', 'N']"
                                :custom="true"
                                :checked="`전체`"
                                :inline="true"
                            />
                        </CRow>
                        <CRow form class="form-group">
                            <CCol sm="3">
                                {{'내려받기'}}
                            </CCol>
                            <CInputRadioGroup
                                class="col-sm-9"
                                :options="['전체', '준비', '받기', '만료']"
                                :custom="true"
                                :checked="`전체`"
                                :inline="true"
                            />
                        </CRow>
                        <CRow form class="form-group">
                            <CCol tag="label" sm="3" class="col-form-label">
                                {{'카테고리'}}
                            </CCol>
                            <CCol sm="9" :class="'form-inline'">
                                <CInputCheckbox
                                v-for="(option, optionIndex) in ['전체', '사랑/이별', '일상/다이어리', '위로/공감', '연예', '팬픽션', '영화/드라마', '스포츠', '여행', '요리/음식', '문화/예술', '사회/정치', '반려동물', '기타']"
                                :key="3 + option"
                                :label="option"
                                :value="option"
                                :custom="true"
                                :checked="optionIndex === 0"
                                :inline="true"
                                />
                            </CCol>
                        </CRow>
                        </CForm>
                    </CCardBody>
                    <CCardFooter>
                        <CButton type="submit" size="sm" color="primary"><CIcon name="cil-check-circle"/> Submit</CButton>
                        <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban"/> Reset</CButton>
                    </CCardFooter>
                </CCard>
            </transition>
          </CCol>
      </CRow>
      <CRow>
          <CCol lg="12">
              <CNavbar
                expandable="md"
                color="info"
                >
                    <CCollapse navbar>
                        <!-- Right aligned nav items -->
                        <CNavbarNav class="ml-auto">
                            <Dropdown class="mr-2 my-0"
                                :options="[{ id: 1, name: 'Option 1'}, { id: 2, name: 'Option 2'}]"
                                v-on:selected="validateSelection"
                                :disabled="false"
                                name="zipcode"
                                :maxItem="10"
                                placeholder="Please select an option">
                            </Dropdown>
                            &nbsp;&nbsp;
                            <CForm inline class="align-middle">
                                <CInput
                                class="mr-2 my-0"
                                placeholder="Search"
                                size="sm"
                                />
                                <CButton color="light" size="sm">
                                Search
                                </CButton>
                            </CForm>
                        </CNavbarNav>
                    </CCollapse>
                </CNavbar>
          </CCol>
      </CRow>
      <CRow>
           <CCol lg="12">
                <vue-good-table 
                :columns="columns" 
                :rows="rows" 
                :search-options="{enabled: true, externalQuery: searchTerm}"
                :pagination-options="{enabled: true, mode: 'pages'}"/>
           </CCol>
      </CRow>

  </div>

</template>

<script>
import 'vue-good-table/dist/vue-good-table.css'
import {VueGoodTable} from 'vue-good-table'


import Dropdown from 'vue-simple-search-dropdown'


export default {
  name: 'Forms',
  components: { VueGoodTable, Dropdown },
  data () {
    return {
        searchTerm: '',
        columns: [
            {
            label: 'Name',
            field: 'name',
            },
            {
            label: 'Age',
            field: 'age',
            type: 'number',
            },
            {
            label: 'Created On',
            field: 'createdAt',
            type: 'date',
            dateInputFormat: 'yyyy-MM-dd',
            dateOutputFormat: 'MMM do yy',
            },
            {
            label: 'Percent',
            field: 'score',
            type: 'percentage',
            },
        ],
        rows: [
            { id:1, name:"John", age: 20, createdAt: '2011-10-31',score: 0.03343 },
            { id:2, name:"Jane", age: 24, createdAt: '2011-10-31', score: 0.03343 },
            { id:3, name:"Susan", age: 16, createdAt: '2011-10-30', score: 0.03343 },
            { id:4, name:"Chris", age: 55, createdAt: '2011-10-11', score: 0.03343 },
            { id:5, name:"Dan", age: 40, createdAt: '2011-10-21', score: 0.03343 },
            { id:6, name:"John", age: 20, createdAt: '2011-10-31', score: 0.03343 },
            { id:1, name:"John", age: 20, createdAt: '2011-10-31',score: 0.03343 },
            { id:2, name:"Jane", age: 24, createdAt: '2011-10-31', score: 0.03343 },
            { id:3, name:"Susan", age: 16, createdAt: '2011-10-30', score: 0.03343 },
            { id:4, name:"Chris", age: 55, createdAt: '2011-10-11', score: 0.03343 },
            { id:5, name:"Dan", age: 40, createdAt: '2011-10-21', score: 0.03343 },
            { id:6, name:"John", age: 20, createdAt: '2011-10-31', score: 0.03343 },
        ],
        





        arrayOfObjects: ['a1', 'a2'],
        object: {
          name: 'a1',
        }
    }
  },
  methods: {
    choiceDropdown(event){
        event.target.value;
    },
    validateSelection(payload) {
            console.log(payload.name);

    }
  }
}
</script>