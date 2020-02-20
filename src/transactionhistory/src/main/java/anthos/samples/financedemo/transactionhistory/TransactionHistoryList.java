/*
 * Copyright 2020, Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package anthos.samples.financedemo.transactionhistory;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.ArrayList;
import java.util.List;

/**
 * Defines a list of historical transactions for a user account.
 */
public final class TransactionHistoryList {

    @JsonProperty("history")
    private List<Entry> history;

    public TransactionHistoryList() {
        this.history = new ArrayList<Entry>();
    }

    public List<Entry> getHistory() {
        return this.history;
    }

    public void setHistory(List<Entry> history) {
        this.history = history;
    }

    public void addEntry(Entry entry) {
        this.history.add(entry);
    }

    /**
     * Defines an entry in a list of historical transactions for a user account.
     */
    public static class Entry {

        /**
         * Defines the type of transaction this entry is.
         */
        public enum Type {
            CREDIT,
            DEBIT
        }

        @JsonProperty("type")
        private Type type;
        @JsonProperty("amount")
        private Integer amount;
        @JsonProperty("account")
        private String account;
        @JsonProperty("timestamp")
        private Double timestamp;

        public Entry(Type type, Integer amount, String account,
                Double timestamp) {
            this.type = type;
            this.amount = amount;
            this.account = account;
            this.timestamp = timestamp;
        }

        public Type getType() {
            return this.type;
        }

        public void setType(Type type) {
            this.type = type;
        }

        public Integer getAmount() {
            return this.amount;
        }

        public void setAmount(Integer amount) {
            this.amount = amount;
        }

        public String getAccount() {
            return this.account;
        }

        public void setAccount(String account) {
            this.account = account;
        }

        public Double getTimestamp() {
            return this.timestamp;
        }

        public void setTimestamp(Double timestamp) {
            this.timestamp = timestamp;
        }
    }
}
